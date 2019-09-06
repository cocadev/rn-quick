
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from './Headers'
import { p } from './normalize';
import Images from '../constants/Images';

export default class _DropDown extends Component {

  static navigationOptions = () => ({
    header: null
  });

  render() {
    const { navigation } = this.props 
    const data = navigation.state.params.data
    const title = navigation.state.params.title

    return (
      <View style={styles.container}>

        <Header
          title={title}
          right={(
            <TouchableOpacity style={styles.rightHeader}>
              <Image source={Images.ok} style={styles.headerImg} />
            </TouchableOpacity>
          )}
          onBack={() => navigation.pop()}
        />
        <ScrollView style={styles.view}>

          <Text style={styles.text}>{title}</Text>

          {
            data.map((item, key) => (
              <View style={styles.board} key={key}>
                <View style={styles.input}>
                  <Text style={styles.h1}>{item}</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                  navigation.state.params.update(item)
                  navigation.pop()
                }}>
                  <Image 
                    source={Images.paquetesCheck} 
                    style={{ width: p(25), height: p(25), marginLeft: p(12) }} 
                  />
                </TouchableOpacity>
              </View>
            ))
          }
          <View style={{ marginTop: p(40)}}></View>

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
    flex: 1,
    padding: p(22),
  },

  h1: {
    fontFamily: 'GeosansLight',
    fontSize: p(18),
  },
  h2: {
    fontFamily: 'GeosansLight',
    fontSize: p(13),
  },
  board: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: p(5)
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
    fontSize: p(16),
    marginLeft: p(6),
    marginVertical: p(5)
  },
  input: {
    flex: 1,
    height: p(27),
    backgroundColor: 'rgba(236, 240, 241,0.6)',
    justifyContent: 'center',
    color: 'rgba(44, 62, 80,0.9)',
    fontSize: p(14),
    fontFamily: 'GeosansLight',
    paddingHorizontal: p(12),
    borderRadius: p(20)
  },


  headerImg: {
    width: p(40),
    height: p(40)
  },
  circle: {
    width: p(100),
    height: p(100),
    borderRadius: p(50),
    borderColor: '#555',
    borderWidth: p(2),
  }
})
