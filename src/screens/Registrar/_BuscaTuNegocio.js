
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Header } from '../../components/Headers'
import { p } from '../../components/normalize';
import Images from '../../constants/Images';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import AwesomeBar from '../../components/awesomeBar';
import * as DATA from '../../config/staticData'
import axios from 'axios';

const MyBox = (props) => {
  const add = props.add
  return (
    <View style={styles.box}>
      <View style={{ flex: 1 }}>
        <Text style={styles.h1}>{props.title}</Text>
      </View>
      <TouchableOpacity
        style={[styles.iconBox, add && { borderLeftWidth: 0 }]}
        onPress={props.onClick}
      >
        {
          !add
            ? <SimpleLineIcons name={'arrow-down'} size={p(19)} color={'#111'} />
            : <MaterialCommunityIcons name={'plus'} size={p(23)} color={'#111'} />
        }
      </TouchableOpacity>
    </View>
  )
}


export default class _BuscaTuNegocio extends Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor(){
    super();
    this.state = {
      Mycategories: [],
      subCategoria: 'Subcat',
      categoria: 'Categoria',
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true})
    axios.get(`https://admin.quickb.mx/Apis/Category/List`)
      .then(res => {
        const Mycategories = res.data;
        console.log( ' **** data', Mycategories)
        this.setState({ Mycategories, isLoading: false });
      })
  }

  render() {

    const { subCategoria, categoria, Mycategories, isLoading } = this.state

    return (
      <View style={styles.container}>
        <Header
          title={'Registrar'}
          right={(
            <View style={styles.rightHeader}>
              <MaterialCommunityIcons name={'cart'} size={p(30)} color={'#6D6E71'} />
            </View>
          )}
          onBack={() => this.props.navigation.pop()}
        />

        { isLoading && <ActivityIndicator />}

        <AwesomeBar />

        <View style={styles.view}>
          <Text style={styles.h1}>{'Busca tu negocio'}</Text>

          <View style={styles.line}>
            <MyBox
              title={'Buscar'}
              
            />
            <MyBox 
              title={categoria}
              onClick={
                () => this.props.navigation.navigate('dropDownScreen', {
                  title: 'Categoria',
                  data: Mycategories,
                  update: (x) => this.setState({ categoria: x })
                })
              } 
            />
          </View>

          <View style={styles.line}>
            <MyBox 
              title={subCategoria} 
              onClick={
                () => this.props.navigation.navigate('dropDownScreen', {
                  title: 'Subcategoria',
                  data: DATA.CATEGORIES_SUBCATEGORIA,
                  update: (x) => this.setState({ subCategoria: x })
                })
              }
            />
            <MyBox 
              title={'Agregar'} 
              add={true} 
              onClick={() => this.props.navigation.navigate('registerBussinesScreen6')} 
            />
          </View>

        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('registerBussinesScreen3')}
        >
          <Text style={styles.h1}>{'Buscar'}</Text>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <Image source={Images.right} style={styles.icon} />
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
    marginTop: p(20),
    padding: p(35),
    paddingTop: p(25)
  },
  h1: {
    fontFamily: 'GeosansLight',
    fontSize: p(22),
    textAlign: 'center',
    color: '#111'
  },
  icon: {
    resizeMode: "contain",
    height: p(30),
    width: p(30),
    marginHorizontal: p(12)
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: p(12)
  },
  rightHeader: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderLeftColor: '#e3e4e5',
    borderLeftWidth: p(3),
    paddingLeft: p(20)
  },
  box: {
    flexDirection: 'row',
    borderWidth: p(3.4),
    width: p(140),
    height: p(36),
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBox: {
    height: p(34),
    borderLeftWidth: p(3.4),
    paddingHorizontal: p(4),
    justifyContent: 'center'
  },
  line: {
    marginTop: p(20),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    borderWidth: p(3.4),
    marginHorizontal: p(35),
    height: p(36),
    justifyContent: 'center',
    alignItems: 'center'
  }
})
