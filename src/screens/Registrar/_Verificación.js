
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Image, Text, ScrollView } from 'react-native';
import { Header } from '../../components/Headers'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { p } from '../../components/normalize';
import Images from '../../constants/Images';
import AwesomeBar from '../../components/awesomeBar';

export default class _Verificación extends Component {

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
        <ScrollView>
        <AwesomeBar check={2}/>
        <View style={styles.view}>

          <Text style={styles.h2}>Verificación de Datos</Text>

          <View style={styles.viewContainer}>
            <Text style={styles.text}>Nombre</Text>
            <TextInput
              placeTextColor="rgba(44, 62, 80,0.9)"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              ref={(input) => this.nameInput = input}
              onChangeText={value => this.setState({ name: value.trim() })}
            />

            <Text style={[styles.text, { marginTop: p(2) }]}>Apellido</Text>
            <TextInput
              placeTextColor="rgba(44, 62, 80,0.9)"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              ref={(input) => this.nameInput = input}
              onChangeText={value => this.setState({ name: value.trim() })}
            />

            <View style={styles.board}>
              <Text style={[styles.text, { marginTop: p(2) }]}>Género</Text>
              <TouchableOpacity style={styles.check}>
                <Text style={[styles.text, { marginTop: p(2) }]}>F</Text>
                <FontAwesome name={'circle-o'} size={p(9)} color={'#111'} style={{ marginLeft: p(6) }} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.check}>
                <Text style={[styles.text, { marginTop: p(2) }]}>M</Text>
                <FontAwesome name={'circle'} size={p(9)} color={'#111'} style={{ marginLeft: p(6) }} />
              </TouchableOpacity>
            </View>

            <Text style={[styles.text, { marginTop: p(5) }]}>Dirección</Text>
            <TextInput
              placeTextColor="rgba(44, 62, 80,0.9)"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              ref={(input) => this.nameInput = input}
              onChangeText={value => this.setState({ name: value.trim() })}
            />

            <Text style={[styles.text, { marginTop: p(2) }]}>Municipio</Text>
            <TextInput
              placeTextColor="rgba(44, 62, 80,0.9)"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              ref={(input) => this.nameInput = input}
              onChangeText={value => this.setState({ name: value.trim() })}
            />

            <Text style={[styles.text, { marginTop: p(2) }]}>Número telefónico</Text>
            <TextInput
              placeTextColor="rgba(44, 62, 80,0.9)"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              ref={(input) => this.nameInput = input}
              onChangeText={value => this.setState({ name: value.trim() })}
            />

            <Text style={[styles.text, { marginTop: p(2) }]}>Estado</Text>
            <TextInput
              placeTextColor="rgba(44, 62, 80,0.9)"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              ref={(input) => this.nameInput = input}
              onChangeText={value => this.setState({ name: value.trim() })}
            />

            <Text style={[styles.text, { marginTop: p(2) }]}>E-mail</Text>
            <TextInput
              placeTextColor="rgba(44, 62, 80,0.9)"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              ref={(input) => this.nameInput = input}
              onChangeText={value => this.setState({ name: value.trim() })}
            />

            <Text style={[styles.text, { marginTop: p(2) }]}>CURP</Text>
            <TextInput
              placeTextColor="rgba(44, 62, 80,0.9)"
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
              ref={(input) => this.nameInput = input}
              onChangeText={value => this.setState({ name: value.trim() })}
            />

          </View>

        </View>
        <View style={styles.bottom}>
          <Image source={Images.right} style={styles.icon} />
        </View>
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
    justifyContent: 'flex-start',
  },

  h1: {
    fontFamily: 'GeosansLight',
    fontSize: p(18),
  },
  h2: {
    fontFamily: 'GeosansLight',
    fontSize: p(22),
    textAlign: 'center',
    marginBottom: p(12)
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: p(12)
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: p(18),
    borderBottomColor: '#333',
    borderBottomWidth: p(2)
  },
  board: {
    flexDirection: 'row',
    borderBottomColor: '#a2a2a2',
    borderBottomWidth: p(2),
    alignItems: 'center',
    paddingVertical: p(5)
  }
})
