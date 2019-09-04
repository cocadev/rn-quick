
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, Image, Text } from 'react-native';
import { Header } from '../components/Headers'
import Images from '../constants/Images';
import { p } from '../components/normalize';
import { Mis } from '../components/listItems';
import * as ICON from '../components/Icons'

export default class _MisNegocios extends Component {
  
  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      filteredData: [],
      search: '',
      enableScrollViewScroll: true
    };
  };

  _renderItem({ item, index }) {
    return (
      <Mis item={item} count={index} onClick={()=>console.log('hey')} />
    )
  }

  render() {
    const { loading, search } = this.state;

    if (!loading) {
      return (
        <View style={styles.container}>
          <Header title={'Mis Negocios'}/>
          <View style={styles.view}>
            
            <View style={styles.header}>
              <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <ICON.Pencil right={p(5)}/>
                <Text style={styles.text}>Negocios Registrados</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <ICON.Pencil right={p(5)}/>
                <Text style={styles.text}>Agregar Negocio</Text>
              </View>
            </View>

            <FlatList
              data={FILTERDATA}
              keyExtractor={(item, i) => String(i)}
              renderItem={this._renderItem}
            />

          </View>
        </View>

      )

    }
  }
}

const FILTERDATA = [
  { 
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png', 
    name: 'Garufa (3.8kms)', 
    address: 'Jardín Juárez, 135, Centro', 
    phone: '01 492 924 29 10',
    rating: 20
  },
  { 
    img: 'https://www.freepnglogos.com/uploads/eagle-png-logo/morehead-state-eagle-png-logo-8.png', 
    name: 'Tierra Roja (10kms)', 
    address: 'José López Portillo, 224, Las Arboledas', 
    phone: '01 492 924 29 10',
    rating: 15
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    padding: p(12),
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: p(12)
  },
  text: {
    fontFamily: 'GeosansLight',
    fontSize: p(12),
  }
  
})
