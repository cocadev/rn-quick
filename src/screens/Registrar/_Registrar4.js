
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { Header } from '../../components/Headers'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { p } from '../../components/normalize';
import { NextBtn } from '../../components/Icons'
import Images from '../../constants/Images';
import AwesomeBar from '../../components/awesomeBar';

export default class _Registrar4 extends Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor() {
    super();
    this.state = {
      check: 0,
      innerCheck: 0
    }
  }

  Board() {
    return (
      <View style={styles.view}>
        <View style={styles.board}>
          <Text style={styles.h0}>Visa</Text>
          <FontAwesome name={'cc-visa'} size={p(30)} color={'#4c55a4'} style={{ marginLeft: p(26) }} />
        </View>
        <View style={styles.boardy}>
          <Text style={styles.h0}>Nombre</Text>
          <Text style={styles.h4}>Mariana Desiree Murillo Sánchez</Text>
        </View>
        <View style={styles.boardy}>
          <Text style={styles.h0}>Número</Text>
          <Text style={styles.h4}>4915 / 2158 / 3658 / 7856</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.boardy, { flex: 1 }]}>
            <Text style={styles.h0}>Caduca</Text>
            <Text style={styles.h4}>10/21</Text>
          </View>
          <View style={[styles.boardy, { flex: 1 }]}>
            <Text style={styles.h0}>CVV</Text>
            <Text style={styles.h4}>***</Text>
          </View>
        </View>
      </View>
    )
  }

  VisaBoard() {
    const { check, innerCheck } = this.state
    return (
      <View style={styles.view}>

        <TouchableOpacity onPress={() => this.setState({ check: 1 })} style={styles.board}>
          <Text style={styles.h2}>Paypal</Text>
          <FontAwesome name={check == 1 ? 'circle' : 'circle-o'} size={p(15)} color={'#676767'} style={{ flex: 1 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({ check: 2 })} style={styles.board}>
          <Text style={styles.h2}>Debito</Text>
          <FontAwesome name={check == 2 ? 'circle' : 'circle-o'} size={p(15)} color={'#676767'} style={{ flex: 1 }} />
        </TouchableOpacity>

        {check == 2 &&
          <View style={{ marginHorizontal: p(50) }}>
            <TouchableOpacity onPress={() => this.setState({ innerCheck: 1 })} style={[styles.board, { borderBottomWidth: 0 }]}>
              <Text style={styles.h3}>Visa</Text>
              <FontAwesome name={innerCheck == 1 ? 'circle' : 'circle-o'} size={p(15)} color={'#676767'} style={{ flex: 0.4 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ innerCheck: 2 })} style={[styles.board, { borderBottomWidth: 0 }]}>
              <Text style={styles.h3}>Masterdcard</Text>
              <FontAwesome name={innerCheck == 2 ? 'circle' : 'circle-o'} size={p(15)} color={'#676767'} style={{ flex: 0.4 }} />
            </TouchableOpacity>
          </View>
        }

        <TouchableOpacity onPress={() => this.setState({ check: 3 })} style={styles.board}>
          <Text style={styles.h2}>Crédito</Text>
          <FontAwesome name={check == 3 ? 'circle' : 'circle-o'} size={p(15)} color={'#676767'} style={{ flex: 1 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({ check: 4 })} style={styles.board}>
          <Text style={styles.h2}>Oxxo</Text>
          <FontAwesome name={check == 4 ? 'circle' : 'circle-o'} size={p(15)} color={'#676767'} style={{ flex: 1 }} />
        </TouchableOpacity>

        <Text style={styles.h1}>Total a pagar $ 500.00 </Text>

      </View>
    )
  }

  render() {

    const { innerCheck } = this.state
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Header
          title={'Registrar'}
          right={(
            <View style={styles.rightHeader}>
              <MaterialCommunityIcons name={'cart'} size={p(30)} color={'#6D6E71'} />
            </View>
          )}
          onBack={()=>navigation.pop()}
        />
        <ScrollView>

          <AwesomeBar check={3} />

          { innerCheck == 1 && this.Board()}
          { innerCheck !== 1 && this.VisaBoard()}

          <NextBtn onClick={()=>navigation.navigate('registerBussinesScreen5')}/>

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
    marginTop: p(20)
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
  input: {
    height: p(22),
    backgroundColor: 'rgba(236, 240, 241,0.6)',
    marginBottom: 10,
    color: 'rgba(44, 62, 80,0.9)',
    fontSize: p(14),
    fontFamily: 'GeosansLight',
    paddingHorizontal: 10,
    borderRadius: 20
  },
  icon: {
    resizeMode: "contain",
    height: p(30),
    width: p(30),
    marginHorizontal: p(12)
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: p(12),
    flex: 1
  },
  board: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: p(16),
    paddingHorizontal: p(25),
    borderBottomColor: '#fafafa',
    borderBottomWidth: p(4),
  },
  boardy: {
    padding: p(16),
    paddingHorizontal: p(25),
    borderBottomColor: '#fafafa',
    borderBottomWidth: p(4),
  }
})
