import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../assets/background_dot.png')}
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
    backgroundColor: '#f8f2ff' //theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 0,
    width: '88%',
    
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
