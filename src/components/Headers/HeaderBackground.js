import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../../core/theme'

export default function HeaderBackground({ children }) {
  return (
    <ImageBackground
      source={require('../../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
     
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e4d6ff'

  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-top',
    padding:38,
    width:'100%',
    paddingHorizontal: 18,
    
  },
})
