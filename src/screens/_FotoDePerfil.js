
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Header } from '../components/Headers'
import { p } from '../components/normalize';
import Images from '../constants/Images';

const imageURL = 'https://garufasteakhouse.com/wp-content/uploads/2018/06/logo-garufa.jpg'

export default class _FotodePerfil extends Component {

  static navigationOptions = () => ({
    header: null
  });

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={'Foto de Perfil'}
          right={(
            <View style={styles.rightHeader}>
              <Image source={Images.ok} style={styles.headerImg} />
            </View>
          )}
        />
        <View style={styles.view}>
          <View style={styles.pan}>
            <View style={styles.board}>
              <Image source={{ uri: imageURL }} style={{ width: p(150), height: p(90) }} />
            </View>
          </View>
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
    paddingTop: p(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightHeader: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderLeftColor: '#e3e4e5',
    borderLeftWidth: p(2),
  },
  headerImg: {
    marginLeft: p(17),
    width: p(40),
    height: p(40)
  },
  board: {
    width: p(180),
    height: p(180),
    backgroundColor: '#fff',
    borderRadius: p(120),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: p(2),
    borderColor: '#e9eaeb'
  },
  pan: {
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    backgroundColor: '#e6e7e9', 
    width: p(240), 
    height: p(240), 
    justifyContent: 'center', 
    alignItems: 'center'
  }
  
})
