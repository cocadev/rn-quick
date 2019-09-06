
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { Header } from '../components/Headers'
import { p } from '../components/normalize';
import { FavoritosItem, MISComentariosItem } from '../components/listItems';
import { FAVORITOS } from '../config/staticData'
import { SearchBar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../constants/Images';

export default class _Favoritos extends Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      filteredData: [],
      search: '',
      enableScrollViewScroll: true
    };
  };

  _renderItem({ item, index }) {
    return (
      <FavoritosItem item={item} count={index} onClick={() => console.log('hey')} edit={true} />
    )
  }

  render() {

    const { loading, search } = this.state;

    return (
      <View style={styles.container}>
        <Header title={'Favoritos'} color={'#FACA0A'} />
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
          </View>
        <View style={styles.view}>

          {
            FAVORITOS.map((item, key) =>
              <View key={key}>
                <MISComentariosItem item={item}/>
                <FlatList
                  data={item.content}
                  keyExtractor={(item, i) => String(i)}
                  renderItem={this._renderItem}
                />
              </View>
            )
          }

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
    paddingHorizontal: p(12),
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: p(12)
  },
  text: {
    fontFamily: 'GeosansLight',
    fontSize: p(12),
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

})
