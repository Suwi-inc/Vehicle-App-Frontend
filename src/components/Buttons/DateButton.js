import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../../core/theme'

export default function DateButton({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.datebutton,
        mode === 'outlined' && { backgroundColor: theme.colors.secondary },
        style,
      ]}
      labelStyle={styles.datetext}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  datebutton: {
    backgroundColor: theme.colors.surface,
    width: '100%',
    marginVertical: 10,
    paddingVertical: 0,
    
  },
  datetext: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 12,
    width:'90%'
  },
})
