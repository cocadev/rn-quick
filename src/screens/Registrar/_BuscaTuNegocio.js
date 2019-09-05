
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Header } from '../../components/Headers'
import { p } from '../../components/normalize';
import Images from '../../constants/Images';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import AwesomeBar from '../../components/awesomeBar';

const MyBox = (props) => {
  const add = props.add
  return (
    <View style={styles.box}>
      <View style={{ flex: 1 }}>
        <Text style={styles.h1}>{props.title}</Text>
      </View>
      <View style={[styles.iconBox, add && { borderLeftWidth: 0 }]}>
        {
          !add
            ? <SimpleLineIcons name={'arrow-down'} size={p(19)} color={'#111'} />
            : <MaterialCommunityIcons name={'plus'} size={p(23)} color={'#111'} />
        }
      </View>
    </View>
  )
}


export default class _BuscaTuNegocio extends Component {

  static navigationOptions = () => ({
    header: null
  });

  render() {

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

        <AwesomeBar />

        <View style={styles.view}>
          <Text style={styles.h1}>{'Busca tu negocio'}</Text>

          <View style={styles.line}>
            <MyBox title={'Buscar'} />
            <MyBox title={'Categoria'} />
          </View>

          <View style={styles.line}>
            <MyBox title={'Subcat'} />
            <MyBox title={'Agregar'} add={true} />
          </View>

        </View>

        <View style={styles.btn}>
          <Text style={styles.h1}>{'Buscar'}</Text>
        </View>

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
    marginTop: p(70),
    padding: p(40),
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
    borderLeftWidth: p(2),
    paddingLeft: p(20)
  },
  box: {
    flexDirection: 'row',
    borderWidth: p(2.4),
    width: p(130),
    height: p(36),
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconBox: {
    height: p(34),
    borderLeftWidth: p(2.1),
    paddingHorizontal: p(4),
    justifyContent: 'center'
  },
  line: {
    marginTop: p(20),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btn: {
    borderWidth: p(2.4),
    marginHorizontal: p(40),
    height: p(36),
    justifyContent: 'center',
    alignItems: 'center'
  }
})
