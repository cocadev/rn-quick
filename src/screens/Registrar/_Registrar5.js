
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { Header } from '../../components/Headers'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { p } from '../../components/normalize';
import AwesomeBar from '../../components/awesomeBar';

export default class _Registrar5 extends Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor() {
    super();
    this.state = {
      check: false,
    }
  }

  Board() {
    return (
      <View style={styles.view}>
        <View style={styles.board}>
          <Text style={styles.h0}>Resumen de Negocios</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.boarding}>
            <Image source={{ uri: 'https://dailyresearchchronicle.com/wp-content/uploads/2019/08/Beer.jpg' }} style={styles.Img} />
            <View style={{ marginLeft: p(12) }}>
              <Text style={[styles.h4, { marginLeft: 0 }]}>{"Garufa"}</Text>
              <Text style={styles.h6}>{"Jardín Juárez, 135, Centro"}</Text>
              <Text style={styles.h5}>{"Restaurante"}</Text>
            </View>
          </View>
          <View style={styles.round}>
            <Text style={[styles.h4, { marginLeft: 0 }]}>{"Paquete"}</Text>
            <Text style={styles.h7}>{"Premium"}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={styles.boarding}>
            <Image source={{ uri: 'https://dailyresearchchronicle.com/wp-content/uploads/2019/08/Beer.jpg' }} style={styles.Img} />
            <View style={{ marginLeft: p(12) }}>
              <Text style={[styles.h4, { marginLeft: 0 }]}>{"Garufa"}</Text>
              <Text style={styles.h6}>{"Jardín Juárez, 135, Centro"}</Text>
              <Text style={styles.h5}>{"Restaurante"}</Text>
            </View>
          </View>
          <View style={styles.round}>
            <Text style={[styles.h4, { marginLeft: 0 }]}>{"Paquete"}</Text>
            <Text style={styles.h7}>{"Básico"}</Text>
          </View>
        </View>

        <View style={styles.board}>
          <Text style={styles.h0}>Método de pago</Text>
        </View>
        <View style={styles.board}>
          <Text style={styles.h0}>Visa</Text>
          <FontAwesome name={'cc-visa'} size={p(30)} color={'#4c55a4'} style={{ marginLeft: p(26) }} />
        </View>
        <View style={styles.board}>
          <Text style={styles.h0}>Nombre</Text>
          <Text style={styles.h4}>Mariana Desiree Murillo Sánchez</Text>
        </View>
        <View style={styles.board}>
          <Text style={styles.h0}>Número</Text>
          <Text style={styles.h4}>**** / **** / ****/ 7856</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.board, { flex: 1 }]}>
            <Text style={styles.h0}>Caduca</Text>
            <Text style={styles.h4}>10/21</Text>
          </View>
          <View style={[styles.board, { flex: 1 }]}>
            <Text style={styles.h0}>CVV</Text>
            <Text style={styles.h4}>***</Text>
          </View>
        </View>


        <Text style={styles.h1}>Total a pagar  $ 500.00</Text>

        <TouchableOpacity onPress={()=> this.setState({ check: true})} style={styles.btn}>
          <Text style={styles.h0}>Pagar</Text>
        </TouchableOpacity>

      </View>
    )
  }

  render() {
    const { check } = this.state
    return (
      <View style={styles.container}>
        <Header
          title={'Registrar'}
          right={(
            <View style={styles.rightHeader}>
              <MaterialCommunityIcons name={'cart'} size={p(30)} color={'#6D6E71'} />
            </View>
          )}
        />
        <ScrollView>

          <AwesomeBar check={4} />

          { !check && this.Board()}
          { check && <Text style={[styles.h1, { marginTop: p(50)}]}>{'Diríjase a su carrito\n de compras'}</Text>}

        </ScrollView>

      </View>

    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    paddingVertical: p(22),
    justifyContent: 'flex-start',
  },
  h1: {
    fontFamily: 'GeosansLight',
    fontSize: p(22),
    textAlign: 'center',
    marginVertical: p(12)
  },
  h0: {
    fontFamily: 'GeosansLight',
    fontSize: p(22),
  },
  h2: {
    flex: 1,
    fontFamily: 'GeosansLight',
    fontSize: p(22),
  },
  h3: {
    flex: 1,
    fontFamily: 'GeosansLight',
    fontSize: p(18),
  },
  h4: {
    fontFamily: 'GeosansLight',
    fontSize: p(13),
    marginLeft: p(12)
  },
  h5: {
    fontFamily: 'GeosansLight',
    fontSize: p(9),
  },
  h6: {
    fontFamily: 'GeosansLight',
    fontSize: p(11),
  },
  h7: {
    fontFamily: 'CaviarDreams',
    fontSize: p(17),
  },
  rightHeader: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderLeftColor: '#e3e4e5',
    borderLeftWidth: p(2),
    paddingLeft: p(20)
  },
  text: {
    fontFamily: 'GeosansLight',
    fontSize: p(13),
  },
  board: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: p(6),
    paddingHorizontal: p(25),
    borderBottomColor: '#fafafa',
    borderBottomWidth: p(4),
  },
  btn: {
    width: p(110),
    height: p(30),
    marginVertical: p(18),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: p(14),
    backgroundColor: '#e6e7e9'
  },
  boarding: {
    flex: 1,
    height: p(60),
    marginHorizontal: p(20),
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
  round: {
    width: p(70),
    height: p(60),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: p(2),
    borderColor: '#c4c5c7',
    borderRadius: p(10),
    marginRight: p(20)
  }
})
