/**
 * @file Favorite.js
 * @description This file show the favorite screen.
 * @author Fernando Mondragón
 * @date 17 MAY 2019
 * @version v1.1
 */
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform, Image, AsyncStorage, FlatList, ImageBackground, Alert } from 'react-native';
import Text  from '../components/CustomText';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Loader from '../components/Loader';
import Images from '../constants/Images';
import { SearchBar } from 'react-native-elements';
import StarRating from 'react-native-star-rating';

const data = [{
  "idCategory": "CAT_G4S",
  "nameCategory": "Deportes",
  "imagen": "https://admin.quickb.mx/AppDelivery/Imagenes/CAT_G4S/M5K04Z5B87.png",
  "list": [{
      "idCategory": "CAT_G4S",
      "idNegocio": "4631894",
      "nombreNegocio": "SANTINO RESTAURANTE BAR",
      "distancia": "6.58",
      "direccion": "AVENIDA UNIVERSIDAD 201B INT LOMAS DEL PTROCINIO",
      "telefonos": "4924913300",
      "logo": "http://3.bp.blogspot.com/-Or24w3s6KXE/UmMkLjxV5hI/AAAAAAABHo8/b2jYEwPDQrI/s1600/wallpaper-28484.jpg",
      "rating": 0,
      "reviews": 0
  },{
      "idCategory": "CAT_G4S",
      "idNegocio": "4435334",
      "nombreNegocio": "FELIPE RESTAURANTE BAR",
      "distancia": "6.58",
      "direccion": "AVENIDA UNIVERSIDAD 201B INT LOMAS DEL PTROCINIO",
      "telefonos": "4924913300",
      "logo": "http://3.bp.blogspot.com/-Or24w3s6KXE/UmMkLjxV5hI/AAAAAAABHo8/b2jYEwPDQrI/s1600/wallpaper-28484.jpg",
      "rating": 0,
      "reviews": 0
  }]
},{
  "idCategory": "CAT_EBT",
  "nameCategory": "Restaurantes",
  "imagen": "https://admin.quickb.mx/AppDelivery/Imagenes/CAT_W9O/H38KGMBE48.png",
  "list": [{
      "idCategory": "CAT_EBT",
      "idNegocio": "4631894",
      "nombreNegocio": "SANTINO RESTAURANTE BAR",
      "distancia": "6.58",
      "direccion": "AVENIDA UNIVERSIDAD 201B INT LOMAS DEL PTROCINIO",
      "telefonos": "4924913300",
      "logo": "http://3.bp.blogspot.com/-Or24w3s6KXE/UmMkLjxV5hI/AAAAAAABHo8/b2jYEwPDQrI/s1600/wallpaper-28484.jpg",
      "rating": 0,
      "reviews": 0
  }]
}];

/**
 * @description Export the favorite screen.
 * @export {Class}
 * @constructor
 * @extends Component
 */
export default class Favorite extends Component {

  constructor(props) {
    super(props)
    this.state = {
      idUser: '',
      navigation: this.props.navigation,
      latitude: null,
      longitude: null,
      loading: true,
      isLoading: false,
      search: '',
      isSearching: false,
      dataSource: [],
      expanded: []
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={styles.titleContainer} type="CaviarDreams">Favoritos</Text>
      ),
      headerLeft: (
        <TouchableOpacity style={styles.leftHeader} onPress={() => navigation.pop()}>
          <Image
            source={ Images.left }
            fadeDuration={0}
            style={styles.imageBack}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity style={styles.rightHeader} onPress={() => navigation.pop()}>
          <Image
            source={ Images.filter }
            fadeDuration={0}
            style={styles.imageBack}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        borderBottomWidth: hp('5%'),
        borderBottomColor: 'rgba(241, 196, 15,1.0)',
        elevation: 0,
        shadowOpacity: 0,
        height: hp('20%'),
      },
    } 
  };
  
  componentDidMount() {
    this.getData();
  };

  getData() {
    AsyncStorage.getItem('user').then((response) => {
      var user = JSON.parse(response);
      this.setState({ idUser: user.idUser })
    });
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude }, () => this.getFavorites()),
      (error) => [
        Alert.alert(
          'Error.', 'Algo salió mal, ayúdanos a mejorar esta aplicación, mándanos un email a contacto@quickb.mx con una captura de pantalla del error. Gracias ... \n\n' + error,
          [{
            text: 'OK'
          }],
        )
      ]
    )
  }

  getFavorites() {
    this.setState({
      isLoading: false,
      loading: false,
      dataSource: data
    });
    /*
    const { idUser, dataSource, latitude, longitude, search } = this.state;
    const params = {
      i: idUser,
      latUsuario: latitude,
      lonUsuario: longitude,
      s: search
    };
    ApiClient.getFavoritesItems(params)
    .then(response => {
      this.setState({
        isLoading: false,
        loading: false,
        dataSource: response
      });
    })
    .catch(error => {
        Alert.alert(
          'Error.', 'Algo salió mal, ayúdanos a mejorar esta aplicación, mándanos un email a contacto@quickb.mx con una captura de pantalla del error. Gracias ... \n\n' + error ,
          [{
            text: 'OK',
            onPress: [
              this.setState({
                isLoading: false,
                loading: false
              }) 
            ]  
          }],
        ); 
    });
    */
  }

  iterationArray() {
    var { dataSource } = this.state;
    var check = [];
    dataSource.forEach(() => {
      check.push(true);
    });
    this.setState({ expanded: check });
  }

  handleSearch = (text) => {
    if (!text || text === '' || text === null){
      clearTimeout(this.timer);
      this.setState({ search: text });
      this.timer = setTimeout(() => this.handleRefresh(), WAIT_INTERVAL);
      return 
    }
    this.setState({ search: text });
  }

  searchAction() { 
    this.handleRefresh();
  }

  handleRefresh = () => {
    clearTimeout(this.timer);
    this.setState({
      dataSource: [],
      loading: false
    });
    this.timer = setTimeout(() => this.getBusinessList(), WAIT_INTERVAL); 
  };

  _getFavoriteCategoryStyle(idCategoria) {
    var categoryColor = this.getColorCategory(idCategoria);
    var categoryContainer = {
      backgroundColor: categoryColor,
      width: wp('85%'),
      height: hp('12%'),
      alignItems: 'stretch',
      marginVertical: 5,
      padding: 15,
      borderRadius: 15,
      flexDirection: 'row',
    }
    return categoryContainer;
  }

  _getBussinesStyle(idCategoria) {
    var categoryColor = this.getColorCategory(idCategoria);
    var labelBussines = {
      padding: 5,
      borderRadius: 15,
      borTopColor: categoryColor,
      borderTopWidth: 3,
      flexDirection: 'row',
      alignItems: 'stretch',
      height: hp('10%'),
      width: wp('60%'),
      marginTop: 22,
      marginBottom: 22
    }
    return labelBussines;
  }

  getColorCategory(idCategoria) {
    let color = '';
    switch (idCategoria) {
      case 'CAT_G4S':
        color = '#577D68';
        break;
      case 'CAT_EBT':
        color = '#FFEA2E';
        break;
      case 'CAT_RMF':
        color = '#D60B7B';
        break;
      case 'CAT_RK1':
        color = '#D12E28';
        break;
      case 'CAT_W9O':
        color = '#DE6225';
        break;
      case 'CAT_05M':
        color = '#009EDC';
        break;
      case 'CAT_3WB':
        color = '#A12D86';
        break;
      case 'CAT_SRO':
        color = '#D61F50';
        break;
      case 'CAT_Y4G':
        color = '#A7C349'
        break;
      default:
        return null;
    }
    return color
  }

  _collapsible(index) {
    var {expanded} = this.state;
    var newExpanded = expanded;
    newExpanded[index] = !expanded[index]
    this.setState({expanded: newExpanded})
  }

  continueAction(idNegocio) {
    return console.log('LLege');
  }

  render() {
    var { search, dataSource, loading, expanded } = this.state;
    if (!loading) {
      return (
        <View style={ styles.container }>
          <View style={ styles.searchContainer }>
            <SearchBar
              lightTheme
              placeholder="Buscar"
              onChangeText={ this.handleSearch }
              value={ search }
              searchIcon={false}
              onSubmitEditing={() => this.searchAction()}
              containerStyle = {styles.searchbarContainer}
              inputContainerStyle = {styles.searchbar}
              inputStyle = {styles.searchbarText}
            />
            <TouchableOpacity style={styles.searchButton} onPress={() => this.searchAction()}>
              <Image
                source={Images.search}
                fadeDuration={0}
                style={styles.searchImage}
              />
            </TouchableOpacity>
          </View>
          <View style={ styles.listContainer }>
            <FlatList
              data={dataSource}
              renderItem={({item, index}) => (
                <View>
                  <TouchableOpacity  style={this._getFavoriteCategoryStyle(item.idCategory)} onPress={() => this._collapsible(index)}>
                    <Image
                      source={{uri: item.imagen}}
                      fadeDuration={0}
                      style={styles.categoryImage}
                    />
                    <Text style={styles.categoryText} type="CaviarDreams">{item.nameCategory}</Text>
                  </TouchableOpacity>
                  <FlatList
                    data={item.list}
                    renderItem={({item}) => (
                      <TouchableOpacity style={this._getBussinesStyle(item.idCategory)} onPress={() => this.continueAction(item.idNegocio)}>
                        <View style = {styles.imageBussines}>
                          <ImageBackground style={styles.bussinesImage} source = {{ uri: item.logo }} />
                        </View>
                        <View style={styles.dataContainer}>
                          <Text type="CaviarDreams" style={styles.bussinesName}>
                            {item.nombreNegocio}{' '}
                            <Text type="CaviarDreams" style={styles.bussinesDetail}>
                              ({item.distancia}km)
                            </Text>
                          </Text>
                          <Text type="CaviarDreams" style={styles.bussinesDetail}>
                            {item.direccion}
                          </Text>
                          <Text type="CaviarDreams" style={styles.bussinesDetail}>
                            {item.telefonos}
                          </Text>
                          <View style={styles.raitingContainer}>
                            <StarRating
                              disabled={true}
                              maxStars={5}
                              rating={parseFloat(item.rating)}
                              fullStarColor={'gold'}
                              starSize={15}
                              starStyle={styles.start}
                            />
                            <Text type="CaviarDreams" style={styles.bussinesDetail}>
                              ({item.reviews})
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    )}
                    keyExtractor={item => item.idNegocio.toString()}
                  />
                </View>
              )}
              keyExtractor={item => item.idCategory.toString()}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Loader visible={this.state.loading}/>
        </View>
      );
    }
  }
};

/**
 * @proyect QuickB
 * @const  {*} styles
 */
const styles = StyleSheet.create({
  leftHeader: {
    padding: 20
  },
  rightHeader: {
    padding: 30
  },
  imageBack: {
    resizeMode: "contain",
    height: hp('7%'),
    width: wp('7%')
  },
  titleContainer: {
    justifyContent: 'center',
    fontSize: Platform.OS === 'ios' ? hp('4%') : hp('7%'),
    paddingLeft: 15
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  searchContainer:{
    flex: 0.04,
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  searchbarContainer:{
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginVertical: 0,
    paddingVertical: 0
  },
  searchbar:{
    borderRadius: 30,
    height: hp('4%'),
    width: wp('75%'),
    justifyContent: 'center',
    backgroundColor: '#DFDEDE'
  },
  searchbarText: {
    textAlign: 'center',
  },
  searchButton: {
    padding: 6,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchImage: {
    resizeMode: "contain",
    height: hp('5%'),
    width: wp('7.5%')
  },
  listContainer: {
    flex: 0.96,
    padding: 20,
    alignItems: 'center'
  },
  categoryImage: {
    resizeMode: "contain",
    height: hp('10%'),
    width: wp('15%')
  },
  categoryText: {
    paddingLeft: 30,
    color: '#fff',
    fontSize: hp('5%')
  },
  imageBussines: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bussinesImage: {
    resizeMode: 'contain',
    width: wp('15%'),
    height: hp('8%')
  },
  dataContainer: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 5
  },
  bussinesName: {
    fontSize: hp('1.7%'),
  },
  bussinesDetail: {
    fontSize: hp('1.3%'),
  },
  raitingContainer: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  start: {
    paddingRight: 5
  }
});

/**
 * @proyect QuickB
 * @const  {Integer} WAIT_INTERVAL
 */
const WAIT_INTERVAL = 1000;