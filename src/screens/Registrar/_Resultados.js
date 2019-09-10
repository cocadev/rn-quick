
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, Image, Text } from 'react-native';
import { Header } from '../../components/Headers'
import { SearchBar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { p } from '../../components/normalize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RESULTADOS } from '../../config/staticData';
import Images from '../../constants/Images';

export default class _Resultados extends Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  };

  _renderItem({ item }, props) {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: p(12) }}>
        <View style={styles.board}>
          <Image source={{ uri: item.avatar}} style={styles.Img} />
          <View style={{ marginLeft: p(12) }}>
            <Text style={styles.h1}>{item.name}</Text>
            <Text style={styles.h2}>{item.address}</Text>
            <Text style={styles.h3}>{item.title}</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={styles.circle}>
            <MaterialCommunityIcons 
              name={'plus'} 
              size={p(30)} 
              color={'#111'} 
              onPress={()=>props.navigation.navigate('registerBussinesScreen7')}
            />
          </View>
          <View style={styles.circle}>
            <MaterialCommunityIcons name={'minus'} size={p(30)} color={'#111'} />
          </View>
        </View>
      </View>
    )
  }

  render() {
    const { search } = this.state;

      return (
        <View style={styles.container}>
          <Header 
            title={'Registrar'} 
            right={(
              <View style={styles.rightHeader}>
                <Image source={Images.ok} style={styles.headerImg} />
              </View>
            )}
            onBack={()=>this.props.navigation.pop()}
          />
          <View style={styles.view}>
            <View style={styles.searchContainer}>
              <View style={styles.searchBarContainer}>
                <SearchBar
                  lightTheme
                  placeholder="Argentinos"
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

            <FlatList
              data={RESULTADOS}
              keyExtractor={(item, i) => String(i)}
              renderItem={(item) => this._renderItem(item, this.props)}
              extraData={this.props}
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
  },
  h2: {
    fontFamily: 'GeosansLight',
    fontSize: p(12),
  },
  h3: {
    fontFamily: 'GeosansLight',
    fontSize: p(10),
  },
  h0:{
    fontFamily: 'GeosansLight',
    fontSize: p(22),
    marginBottom: p(10),
    marginLeft: p(18)
  },
  board: {
    width: p(240),
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
