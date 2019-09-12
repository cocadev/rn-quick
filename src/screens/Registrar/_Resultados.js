
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, Image, Text, ActivityIndicator } from 'react-native';
import { Header } from '../../components/Headers'
import { SearchBar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { p } from '../../components/normalize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { RESULTADOS } from '../../config/staticData';
import Images from '../../constants/Images';
import _ from 'underscore'

export default class _Resultados extends Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      refreshing: false,
      dataSource: [],
      page: 1,
      seed: 1,
      isLoading: true,
      mylist: [],
    };
  };

  componentDidMount() {
    this.fetchData()
  }

  _renderItem({ item, index }, props) {
    const { mylist } = this.state;
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: p(12) }}>
        <View style={styles.board}>
          <Image source={{ uri: 'https://image.tmdb.org/t/p/w300/' + item.poster_path }} style={styles.Img} />
          <View style={{ marginLeft: p(12) }}>
            <Text style={styles.h1} numberOfLines={1}>{item.original_title}</Text>
            <Text style={styles.h2} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.h3} numberOfLines={1}>{item.release_date}</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {

              var array = mylist
              console.log(array)
              var myIndex = array.indexOf(index);

              if (myIndex > -1) {
                array.splice(myIndex, 1);
                this.setState({ mylist: array })
              } else {
                var array = mylist.concat(index);
                this.setState({ mylist: array })
              }
              console.log(' mylistmylistmylist', mylist)

            }}>
            {mylist.includes(index) ?
              <Image
                source={Images.paquetesCheck}
                style={{ width: p(25), height: p(25), marginLeft: p(12) }}
              /> :
              <Image
                source={Images.paquetesUnCheck}
                style={{ width: p(25), height: p(25), marginLeft: p(12) }}
              />
            }
          </TouchableOpacity>
          {/* <View style={styles.circle}>
            <MaterialCommunityIcons
              name={'plus'}
              size={p(30)}
              color={'#111'}
            // onPress={() => props.navigation.navigate('registerBussinesScreen7')}
            />
          </View>
          <View style={styles.circle}>
            <MaterialCommunityIcons name={'minus'} size={p(30)} color={'#111'} />
          </View> */}
        </View>
      </View>
    )
  }
  fetchData = () => {
    const { page, seed } = this.state;
    // const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=5`;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=f3e9f7d1677c7aa63c9ab526381eeceb&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=${page}`;

    this.setState({ loading: true });
    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          dataSource: page == 1 ? response.results : [...this.state.dataSource, ...response.results],
          isLoading: false,
          refreshing: false,
        });
      })
      .catch((error) => { console.error(error); })
  }

  onRefresh = () => {
    this.setState({
      dataSource: [],
      isLoading: false,
      refreshing: true,
      seed: 1,
      page: 1
    })
    this.fetchData()
  }
  loadMore = () => {
    this.setState({
      refreshing: true,
      page: this.state.page + 1,
    })
    this.fetchData()
  }

  render() {

    const { search, isLoading } = this.state;

    return (
      <View style={styles.container}>
        <Header
          title={'Registrar'}
          right={(
            <TouchableOpacity
              style={styles.rightHeader}
              onPress={() => this.props.navigation.navigate('registerBussinesScreen7')}
            >
              <Image source={Images.ok} style={styles.headerImg} />
            </TouchableOpacity>
          )}
          onBack={() => this.props.navigation.pop()}
        />
        <View style={styles.view}>
          <View style={styles.searchContainer}>
            <View style={styles.searchBarContainer}>
              <SearchBar
                lightTheme
                placeholder="Buscar"
                onChangeText={this.handleSearch}
                value={search}
                searchIcon={false}
                onSubmitEditing={() => this._search()}
                inputContainerStyle={styles.searchbar}
                inputStyle={styles.searchbarText}
                containerStyle={styles.containerStyle}

              />
              <TouchableOpacity style={styles.searchButton} onPress={() => this._search()}>
                <Image
                  source={Images.search}
                  fadeDuration={0}
                  style={styles.searchFilterImage}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.h0}>Resultados</Text>

          {isLoading && <ActivityIndicator />}

          {/* <FlatList
              data={RESULTADOS}
              keyExtractor={(item, i) => String(i)}
              renderItem={(item) => this._renderItem(item, this.props)}
              extraData={this.props}
              /> */}
          <FlatList
            style={{ marginTop: 12 }}
            data={this.state.dataSource}
            keyExtractor={(item, i) => String(i)}
            numColumns={1}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            onRefresh={this.onRefresh}
            refreshing={this.state.refreshing}
            onEndReached={this.loadMore}
            renderItem={(item) => this._renderItem(item, this.props)}
            extraData={this.state}

          />

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    // paddingHorizontal: p(22),
    justifyContent: 'flex-start',
  },
  hoy: {
    fontFamily: 'GeosansLight',
    fontSize: p(22),
    alignSelf: 'flex-end',
    marginTop: p(15),
    marginRight: p(22)
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: p(12)
  },
  searchBarContainer: {
    marginHorizontal: p(22),
    flex: 11,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    width: p(300),
    padding: 0,
    borderRadius: 30,
  },
  filterContainer: {
    flex: 2,
    width: p(300),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderLeftWidth: 1,
    borderLeftColor: '#AAAAAA'
  },
  searchButton: {
    padding: 5,
    marginLeft: p(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchFilterImage: {
    resizeMode: "contain",
    height: hp('5%'),
    width: wp('7%')
  },
  searchbar: {
    borderRadius: 30,
    height: hp('5%'),
    width: p(300),
    backgroundColor: '#DFDEDE'
  },
  searchbarText: {
    textAlign: 'center',
    fontFamily: 'GeosansLight',
    fontSize: p(16),
  },
  circle: {
    width: p(30),
    height: p(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: p(15),
    backgroundColor: '#939598'
  },
  h1: {
    fontFamily: 'GeosansLight',
    fontSize: p(16),
    maxWidth: p(160)
  },
  h2: {
    fontFamily: 'GeosansLight',
    fontSize: p(12),
    maxWidth: p(160)
  },
  h3: {
    fontFamily: 'GeosansLight',
    fontSize: p(10),
  },
  h0: {
    fontFamily: 'GeosansLight',
    fontSize: p(22),
    marginBottom: p(10),
    marginLeft: p(18)
  },
  board: {
    width: p(260),
    height: p(60),
    padding: p(5),
    flexDirection: 'row',
    marginVertical: p(7),
    borderColor: '#f26D03',
    borderWidth: p(2),
    borderTopWidth: p(6),
    borderTopRightRadius: p(12),
    borderTopLeftRadius: p(12)
  },
  Img: {
    width: p(60),
    height: p(46)
  },
  rightHeader: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderLeftColor: '#e3e4e5',
    borderLeftWidth: p(3),
  },
  headerImg: {
    marginLeft: p(17),
    width: p(40),
    height: p(40)
  }
})
