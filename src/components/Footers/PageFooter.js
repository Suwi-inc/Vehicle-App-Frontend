import React,  {useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import FooterBackground from './FooterBackground'
import { useNavigation } from '@react-navigation/native'

const images = [
  require('../../assets/home.png'),
  require('../../assets/favourites.png'),
  require('../../assets/search.png'),
  require('../../assets/car.png'),
  require('../../assets/user.png'),
];

const PageFooter = () => {
  const [selected, setSelected] = useState(null);
  const navigation = useNavigation();
  //remove me and use useeffect for all pages
 
  useEffect(() => {
    if (selected === 0) {
      navigation.navigate('Dashboard');
    }
    if (selected === 1) {
      //navigation.navigate('Dashboard');
    }
    if (selected === 2) {
      //navigation.navigate('Dashboard');
    }
    if(selected===3)
    {
      navigation.navigate('VehiclesScreen');
    }
    if (selected === 4) {
     // navigation.navigate('Dashboard');
    }
  }, [selected]);

  return (
        <FooterBackground>
        {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.imageContainer,
            { opacity: selected === index ? 0.5 : 1 },
          ]}
          onPress={() => {
            setSelected(index);
        
          }
        }
        >
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
      ))}
        </FooterBackground>
  
  );
};

const styles = StyleSheet.create({
 
  imageContainer: {
    padding: 10,
    marginBottom: 10
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default PageFooter;