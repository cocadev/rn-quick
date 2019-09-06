import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Images from '../constants/Images';
import { p } from './normalize';


export const Pencil = props => (
  <Image source={Images.mailSelected} style={{ width: p(22), height: p(22), marginRight: props.right, marginLeft: props.left}}/>
)

export const Delete = props => (
  <Image source={Images.mailUnselected} style={{ width: p(22), height: p(22), marginLeft: props.left}}/>
)

export const Trash = props => (
  <Image source={Images.trash} style={{ width: p(22), height: p(22), marginLeft: props.left}}/>
)

export const Share = props => (
  <Image source={Images.share} style={{ width: p(22), height: p(22), marginLeft: props.left}}/>
)

const styles = StyleSheet.create({
  
});
