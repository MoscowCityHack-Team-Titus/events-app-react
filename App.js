import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Authentication from './src/Authentication'
import HomePage from './src/HomePage'
import MapPage from './src/MapPage'
import Favourites from './src/Favourites'
import EventPage from './src/EventPage'
import SearchPage from './src/SearchPage'
import Label from './src/Label';

export default App = () => {

  return (
    <>
    <Label/>
    <Router>
      <Scene key ='root'>
        <Scene 
          component = {Authentication}
          hideNavBar= {true}
          initial = {true}
          key='Authentication'
          title='Authentication'
        />
        <Scene
          component = {HomePage}
          hideNavBar = {true}
          key = 'HomePage'
          title = 'HomePage'
        />
        <Scene
          component = {MapPage}
          hideNavBar = {true}
          key= 'MapPage'
          title = 'MapPage'
        />
        <Scene
          component = {Favourites}
          hideNavBar = {true}
          key= 'Favourites'
          title = 'Favourites'
        />
        <Scene
          component = {EventPage}
          hideNavBar = {true}
          key = 'EventPage'
          title = 'EventPage'
        />
        <Scene
          component = {SearchPage}
          hideNavBar = {true}
          key = "SearchPage"
          title = "SearchPage"
        />
      </Scene>
    </Router>
    </>
  );
};

const styles = StyleSheet.create({
  flat: {
    height: '100%',
    padding: 24,
    backgroundColor: "#61dafb",
    marginTop: 100
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
})