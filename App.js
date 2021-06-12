import React, { useEffect, useState, Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Authentication from './src/Authentication'
import HomePage from './src/HomePage'
import MapPage from './src/MapPage'
import Favourites from './src/Favourites'

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.mos.ru/api/newsfeed/v4/frontend/json/ru/afisha?expand=spheres&fields=id,title,label,image,date_from,date_to,kind,free&filter=%7B%22%3C%3Doccurrences.date_from%22:%222021-06-27+23:59:59%22,%22%3E%3Doccurrences.date_from%22:%222021-05-27+00:00:00%22%7D&per-page=9&sort=occurrences.date_to,-occurrences.date_from')
      .then((response) => response.json())
      .then((json) => setData(json.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  return (
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
      </Scene>
    </Router>
    // <View>
    //   {isLoading ? <ActivityIndicator/> : (
    //     <FlatList style={ styles.flat }
    //       data={data}
    //       keyExtractor={({ id }, index) => id.toString()}
    //       renderItem={({ item }) => (
    //         <>
    //           <Text>{ item.title }</Text>
    //           <Image 
    //           style={styles.tinyLogo}
    //           source = {{ uri:  'https://www.mos.ru' +  item.image.small.src }}
    //           />
    //         </>
    //       )}
    //     />
    //   )}
    // </View>
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