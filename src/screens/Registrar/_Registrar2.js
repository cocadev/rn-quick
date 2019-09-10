
import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Header } from '../../components/Headers'
import { p } from '../../components/normalize';
import { PAQUETES } from '../../config/staticData'
import Images from '../../constants/Images';
import AwesomeBar from '../../components/awesomeBar';
import { NextBtn } from '../../components/Icons'

export default class _Registrar2 extends Component {

  static navigationOptions = () => ({
    header: null
  });

  constructor() {
    super();
    this.state = {
      check: 2,
      _check: 2
    }
  }

  render() {

    const { check, _check } = this.state
    const { navigation } = this.props

    return (
      <View style={styles.container}>
        <Header 
          title={'Registrar'} 
          onBack={()=>navigation.pop()}
        />

        <ScrollView>

          <AwesomeBar check={1} />

          <Text style={[styles.h1, { textAlign: 'left', marginVertical: p(20), marginLeft: p(20) }]}>Mis Negocios</Text>

          <View style={styles.boarding}>
            <Image source={{ uri: 'https://dailyresearchchronicle.com/wp-content/uploads/2019/08/Beer.jpg' }} style={styles.Img} />
            <View style={{ marginLeft: p(12) }}>
              <Text style={styles.h4}>{"Garufa"}</Text>
              <Text style={styles.h2}>{"Jardín Juárez, 135, Centro"}</Text>
              <Text style={styles.h5}>{"Restaurante"}</Text>
            </View>
          </View>

          <Text style={[styles.h1, { margin: p(12) }]}>Paquete</Text>

          <View style={styles.view}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: p(12) }}>
              <TouchableOpacity onPress={() => this.setState({ check: 0 })} style={styles.circle}>
                {check == 0 && <Image source={Images.ok} style={styles.checkImg} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ check: 1 })} style={styles.circle}>
                {check == 1 && <Image source={Images.ok} style={styles.checkImg} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ check: 2 })} style={styles.circle}>
                {check == 2 && <Image source={Images.ok} style={styles.checkImg} />}
              </TouchableOpacity>
            </View>


            <View style={styles.viewing}>

              <View style={styles.board}>

                {
                  PAQUETES.map((item, key) => (
                    <View key={key} style={[styles.item, { borderColor: item.color }]}>
                      <Text style={[styles.h1, { color: item.color }]}>{item.name}</Text>

                      <View style={{ marginTop: p(12), flex: 1 }}>
                        {item.content.map((x, key) => (
                          <Text key={key} style={styles.h2}>-{x}</Text>
                        ))}
                      </View>

                      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={[styles.h3, { color: item.color }]}>{item.price}</Text>
                        <Text style={[styles.h3, { color: item.color }]}>{item.note}</Text>
                      </View>
                    </View>
                  ))
                }

              </View>
            </View>

          </View>

          <View style={styles.boarding}>
            <Image source={{ uri: 'https://dailyresearchchronicle.com/wp-content/uploads/2019/08/Beer.jpg' }} style={styles.Img} />
            <View style={{ marginLeft: p(12) }}>
              <Text style={styles.h4}>{"Garufa"}</Text>
              <Text style={styles.h2}>{"Jardín Juárez, 135, Centro"}</Text>
              <Text style={styles.h5}>{"Restaurante"}</Text>
            </View>
          </View>

          <Text style={[styles.h1, { margin: p(12) }]}>Paquete</Text>

          <View style={styles.view}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: p(12) }}>
              <TouchableOpacity onPress={() => this.setState({ _check: 0 })} style={styles.circle}>
                {_check == 0 && <Image source={Images.ok} style={styles.checkImg} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ _check: 1 })} style={styles.circle}>
                {_check == 1 && <Image source={Images.ok} style={styles.checkImg} />}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({ _check: 2 })} style={styles.circle}>
                {_check == 2 && <Image source={Images.ok} style={styles.checkImg} />}
              </TouchableOpacity>
            </View>


            <View style={styles.viewing}>

              <View style={styles.board}>

                {
                  PAQUETES.map((item, key) => (
                    <View key={key} style={[styles.item, { borderColor: item.color }]}>
                      <Text style={[styles.h1, { color: item.color }]}>{item.name}</Text>

                      <View style={{ marginTop: p(12), flex: 1 }}>
                        {item.content.map((x, key) => (
                          <Text key={key} style={styles.h2}>-{x}</Text>
                        ))}
                      </View>

                      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={[styles.h3, { color: item.color }]}>{item.price}</Text>
                        <Text style={[styles.h3, { color: item.color }]}>{item.note}</Text>
                      </View>
                    </View>
                  ))
                }

              </View>
            </View>

          </View>

          <NextBtn onClick={()=>navigation.navigate('registerBussinesScreen8')}/>

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
    paddingHorizontal: p(12),
    justifyContent: 'flex-start',
  },
  h1: {
    fontFamily: 'CaviarDreams',
    textAlign: 'center',
    fontSize: p(22),
  },
  h2: {
    fontFamily: 'GeosansLight',
    fontSize: p(10),
  },
  h3: {
    fontFamily: 'Caviar_Dreams_Bold',
    fontSize: p(12),
    textAlign: 'center'
  },
  h4: {
    fontFamily: 'GeosansLight',
    fontSize: p(15),
  },
  h5: {
    fontFamily: 'GeosansLight',
    fontSize: p(9),
  },
  board: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewing: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: p(12),

  },
  item: {
    borderColor: 'red',
    borderWidth: p(3),
    borderTopWidth: p(8),
    borderBottomWidth: p(8),
    borderRadius: p(22),
    padding: p(7),
    width: p(110),
    height: p(220),
    marginBottom: p(20)
  },
  circle: {
    width: p(40),
    height: p(40),
    borderRadius: p(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#939598'
  },
  checkImg: {
    width: p(27),
    height: p(27)
  },
  boarding: {
    height: p(60),
    marginHorizontal: p(20),
    padding: p(5),
    flexDirection: 'row',
    marginVertical: p(7),
    borderColor: '#f26D03',
    borderWidth: p(3),
    borderTopWidth: p(6),
    borderTopRightRadius: p(12),
    borderTopLeftRadius: p(12)
  },
  Img: {
    width: p(60),
    height: p(46)
  },

})
