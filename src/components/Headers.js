import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Images from '../constants/Images';
import { p } from './normalize';


export const Header = props => {

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', paddingHorizontal: p(15) }}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <TouchableOpacity style={styles.leftHeader} onPress={() => this.state.navigation.pop()}>
            <Image
              source={Images.left}
              fadeDuration={0}
              style={styles.imageBack}
            />
          </TouchableOpacity>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.text}>{props.title}</Text>
          </View>
        </View>
        {props.right}
      </View>
      <View style={[styles.footer, props.color && { backgroundColor: props.color}]}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24
  },
  imageBack: {
    resizeMode: "contain",
    height: p(30),
    width: p(30)
  },
  leftHeader: {
    paddingVertical: p(30),
    marginLeft: p(5)
  },
  text: {
    fontSize: p(30),
    fontFamily: 'CaviarDreams',
    marginLeft: p(16)
  },
  footer: {
    height: p(22),
    backgroundColor: '#000'
  }
});
