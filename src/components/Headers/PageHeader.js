import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import HeaderBackground from './HeaderBackground';

const PageHeader = () => {
  const [input, setInput] = useState('');

  return (
    
        <HeaderBackground>
        <TouchableOpacity>
        <Image
        source={require('../../assets/filter.png')}
        style={styles.image}
         />
        </TouchableOpacity>
        
      <TextInput
        style={styles.textInput}
        onChangeText={text => setInput(text)}
        value={input}
      />
        <TouchableOpacity>
        <Image
        source={require('../../assets/user_profile.png')}
        style={styles.image}
         />
         </TouchableOpacity>
        </HeaderBackground>
      
  
  );
};

const styles = StyleSheet.create({

  image: {
    width: 40,
    height: 40,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 30,
  },
});

export default PageHeader;
