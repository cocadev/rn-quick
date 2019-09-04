import React from 'react';
import { Font } from 'expo';
import { ActivityIndicator, View, StyleSheet, Alert } from 'react-native';
import { AppPermissions } from './src/config/AppPermissions';
import MainNavigation from './src/navigation/MainNavigation';

/*
Name: App
Description: This function is the main fo the app for do the correct navigation
Made: Fernando Mondragón 01/04/2019
Return: ""
*/
export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Caviar_Dreams_Bold' : require('./src/assets/fonts/Caviar_Dreams_Bold.ttf'),
      'CaviarDreams_BoldItalic' : require('./src/assets/fonts/CaviarDreams_BoldItalic.ttf'),
      'CaviarDreams_Italic' : require('./src/assets/fonts/CaviarDreams_Italic.ttf'),
      'CaviarDreams' : require('./src/assets/fonts/CaviarDreams.ttf'),
      'GeosansLight-Oblique' : require('./src/assets/fonts/GeosansLight-Oblique.ttf'),
      'GeosansLight' : require('./src/assets/fonts/GeosansLight.ttf'),
      'gothamblack' : require('./src/assets/fonts/gothamblack.ttf'),
      'gothamblackitalic' : require('./src/assets/fonts/gothamblackitalic.ttf'),
      'gothambold2' : require('./src/assets/fonts/gothambold2.ttf'),
      'gothambolditalic2' : require('./src/assets/fonts/gothambolditalic2.ttf'),
      'gothambook2' : require('./src/assets/fonts/gothambook2.ttf'),
      'gothambookitalic2' : require('./src/assets/fonts/gothambookitalic2.ttf'),
      'GothamLightItalic' : require('./src/assets/fonts/GothamLightItalic.ttf'),
      'gothammedium2' : require('./src/assets/fonts/gothammedium2.ttf'),
      'gothammediumitalic' : require('./src/assets/fonts/gothammediumitalic.ttf')
    });

    this.setState({ fontLoaded: true });

    AppPermissions.location()
      .catch(error => {
        Alert.alert(
          'Error.', 'Algo salió mal, ayúdanos a mejorar esta aplicación, mándanos un email a contacto@quickb.mx con una captura de pantalla del error. Gracias ... \n\n' + error,
          [{
            text: 'OK'
          }],
        );
    });

    AppPermissions.cameraRoll()
      .catch(error => {
        Alert.alert(
          'Error.', 'Algo salió mal, ayúdanos a mejorar esta aplicación, mándanos un email a contacto@quickb.mx con una captura de pantalla del error. Gracias ... \n\n' + error,
          [{
            text: 'OK'
          }],
        );
    });
  }

  render() {
      return (
        this.state.fontLoaded ? (
          <MainNavigation/>
        ) : (
          <View style={styles.appContainer}>
            <ActivityIndicator size="large" />
          </View>
        )
      );

      /* 1. Navigate to the Details route with params */
      this.props.navigation.navigate('MainNavigation', {
        type: 'failure',
      });
  }
}

// Name: Constants
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});
