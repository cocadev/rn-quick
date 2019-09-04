/**
 * @file HomeNavigation.js
 * @description This file do the home navigation.
 * @author Fernando Mondragón
 * @date 01 APR 2019
 * @version v1.1
 */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Images from '../constants/Images';
import HomeScreen from '../screens/Home';
import SideMenuScreen from '../screens/SideMenu';
import ComunityScreen from '../screens/Comunity';
import MessageScreen from '../screens/Message';
import MessageContainerScreen from '../screens/MessageContainer';
import NotificationScreen from '../screens/Notification';
import FavoriteScreen from '../screens/Favorite';
import CountScreen from '../screens/Count';
import RecentScreen from '../screens/Recent';
import MapScreen from '../screens/Map';
import BussinesListScreen from '../screens/BussinesList';
import BussinesDetailScreen from '../screens/BussinesDetail';
import BussinesListFilterScreen from '../screens/BussinesListFilter';
import DistanceFilterScreen from '../screens/DistanceFilter';
import SubcategoryFilterScreen from '../screens/SubcategoryFilter';
import ComentariesScreen from '../screens/Comentaries';

/**
 * @proyect QuickB
 * @const  {*} HomeStack
 */
const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Map: MapScreen,
    BussinesList: BussinesListScreen,
    BussinesListFilter: BussinesListFilterScreen,
    BussinesDetail: BussinesDetailScreen,
    Comentaries: ComentariesScreen,
    DistanceFilter: DistanceFilterScreen,
    SubcategoryFilter: SubcategoryFilterScreen,
    MessageSc: MessageScreen
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Image
      source={ focused ? Images.homeSelected : Images.homeUnselected }
      fadeDuration={0}
      style={styles.imageMenuHome}
    />
  )
};

/**
 * @proyect QuickB
 * @const  {*} SideMenuStack
 */
const SideMenuStack = createStackNavigator({
  SideMenu: SideMenuScreen,
  Favorite: FavoriteScreen,
  Count: CountScreen,
  Recent: RecentScreen
});

SideMenuStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Image
      source={ focused ? Images.menuSelected : Images.menuUnselected }
      fadeDuration={0}
      style={styles.imageMenuHome}
    />
  ),
};

/**
 * @proyect QuickB
 * @const  {*} ComunityStack
 */
const ComunityStack = createStackNavigator({
  Comunity: ComunityScreen,
  Map: MapScreen
});

ComunityStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Image
      source={ focused ? Images.peopleSelected : Images.peopleUnselected }
      fadeDuration={0}
      style={styles.imagePeople}
    />
  ),
};

/**
 * @proyect QuickB
 * @const  {*} MessageStack
 */
const MessageStack = createStackNavigator({
  MessageContainer: MessageContainerScreen,
  MessageSc: MessageScreen
});

MessageStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Image
      source={ focused ? Images.mailSelected : Images.mailUnselected }
      fadeDuration={0}
      style={styles.imageMessage}
    />
  ),
};

/**
 * @proyect QuickB
 * @const  {*} NotificationStack
 */
const NotificationStack = createStackNavigator({
  Notification: NotificationScreen
});

NotificationStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Image
      source={ focused ? Images.notificationSelected : Images.notificationUnselected }
      fadeDuration={0}
      style={styles.imageNotification}
    />
  ),
};

/**
 * @proyect QuickB
 * @const  {*} BottomTabRoutes
 */
const BottomTabRoutes = {
  Side: SideMenuStack,
  Comunity: ComunityStack,
  Home: HomeStack,
  Message: MessageStack,
  Notification: NotificationStack
}

/**
 * @proyect QuickB
 * @const  {*} BottomTabConfiguration
 */
const BottomTabConfiguration = {
  initialRouteName: 'Home',
  tabBarOptions: {
    showLabel: false,
  }
}

/**
 * @proyect QuickB
 * @const  {*} styles
 */
const styles = StyleSheet.create({
  imageMenuHome: {
    resizeMode: "contain",
    height: hp('4.5%'),
    width: wp('4.5%')
  },
  imagePeople: {
    resizeMode: "contain",
    height: hp('5%'),
    width: wp('5%')
  },
  imageMessage: {
    resizeMode: "contain",
    height: hp('4.7%'),
    width: wp('4.7%')
  },
  imageNotification: {
    resizeMode: "contain",
    height: hp('4.3%'),
    width: wp('4.3%')
  }
});

/**
 * @description Export the bottom navigation.
 * @export {Class}
 */
export default createBottomTabNavigator(BottomTabRoutes, BottomTabConfiguration)