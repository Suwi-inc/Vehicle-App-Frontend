import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import GridBackground from './GridBackground';
import { theme } from '../../core/theme';

const UserSettings = ({ pictures }) => {
  return (

<GridBackground>
      <ScrollView style={styles.container}>
        {pictures.map((picture, index) => (
          <View style={[styles.pictureContainer]} key={index}>
            <Image source={require('../../assets/gridcar.png')} style={[styles.image, {borderColor: theme.colors.cool, borderWidth: 1}]} />
            <View style={styles.textContainer}>
              <Text style={[styles.title, ]}>{picture.title}</Text>
              <Text style={[styles.description, ]}>{picture.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </GridBackground>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  pictureContainer: {

    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.colors.cool, 
    borderWidth: 1,
    padding:10,
    marginBottom:5,
    paddingLeft: 20
   
  },
  image: {
    width: 105,
    height: 65,
  },
  textContainer: {
    flex: 1,
    marginRight: 20,
    justifyContent: 'right',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
});

export default PictureGrid;
