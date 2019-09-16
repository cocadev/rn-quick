
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Header } from '../../components/Headers'
import { p } from '../../components/normalize';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import AwesomeBar from '../../components/awesomeBar';
import ValidationService from '../../config/validation';
import { ApiClient } from '../../components/Api';

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

  constructor(props) {
    super(props);
    this.state = {
      Mycategories: [],
      subCategoria: null,
      categoria: null,
      agregar: null,
      location: null,
      nombre: '',
      categoriaId: null,
      subCategoriaId: null,

    }
  }

  render() {

    const { subCategoria, categoria, categoriaId, agregar, subCategoriaId, location } = this.state

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

        <AwesomeBar />

        <View style={styles.view}>
          <Text style={[styles.h1, { textAlign: 'center', marginBottom: p(12) }]}>{'Busca o crea tu negocio'}</Text>

          <TextInput
            placeTextColor="rgba(44, 62, 80,0.9)"
            placeholder="1. Ingresa nombre del negocio"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.nombreInput = input}
            onChangeText={value => this.setState({ nombre: value.trim() })}
          />

          <MyBox
            title={categoria ? categoria : '2. Selecciona una categoría'}
            onClick={
              () => this.props.navigation.navigate('updatedDropDownScreen', {
                title: 'Categoria',
                api: ApiClient.getCategoriesItems(),
                update: (x) => this.setState({ categoria: x.nombre, categoriaId: x.idCategoria })
              })
            }
          />
          <MyBox
            title={subCategoria ? subCategoria : '3. Selecciona una subcategoría'}
            onClick={
              () => {
                if (ValidationService.register_subcat(categoria)) {
                  return false
                }
                this.props.navigation.navigate('updatedDropDownScreen', {
                  title: 'Subcategoria',
                  api: ApiClient.getBussinesSubcategoryList({ c: categoriaId }),
                  update: (x) => this.setState({ subCategoria: 'selected!', subCategoriaId: x.idSubcategoria })
                })
              }
            }
          />

        </View>

        <TouchableOpacity
          style={[styles.btn, { marginBottom: p(12) }]}
          onPress={() => this.next()}
        >
          <Text style={styles.h1}>{'4. Busca tu negocio'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { marginTop: p(22), marginHorizontal: p(35) }]}
          onPress={() => this.props.navigation.navigate('registerBussinesScreen6', {
            update: (x) => this.setState({ agregar: x })
          })}
        >
          <Text style={styles.h1}>{'o crea uno nuevo'}</Text>
        </TouchableOpacity>


      </View>
    )

  }

  next() {
    const { subCategoriaId, categoriaId, agregar, location } = this.state

    // if (ValidationService.register_busca(categoriaId, subCategoriaId, agregar, location)) {
    //   return false
    // }
    let mydata = { categoriaId, subCategoriaId, agregar, location }
    this.props.navigation.navigate('registerBussinesScreen3', mydata)
    // this.props.navigation.navigate('registerBussinesScreen8')


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    marginTop: p(10),
    padding: p(20),
    paddingBottom: p(12),
  },
  h1: {
    fontFamily: 'GeosansLight',
    fontSize: p(22),
    marginLeft: p(6),
    color: '#111',
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
    marginHorizontal: p(16),
    borderWidth: p(3.4),
    height: p(36),
    marginTop: p(8),
    // justifyContent: 'center',
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
    marginHorizontal: p(20),
    height: p(36),
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: p(36),
    // backgroundColor: 'rgba(236, 240, 241,0.6)',
    marginBottom: 10,
    color: 'rgba(44, 62, 80, 0.9)',
    fontSize: p(14),
    fontFamily: 'GeosansLight',
    paddingLeft: p(10),
    marginHorizontal: p(16),
    borderWidth: p(3.4),
    fontSize: p(22),

  },
})
