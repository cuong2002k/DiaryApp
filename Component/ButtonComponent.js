import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { STYLE } from '../Style/style'

const ButtonComponent = ({ title, onPress, style }) => {
  return (
    <Button
      mode={'contained'}
      onPress={onPress}
      style={[style, styles.button]}
    >
      {title}
    </Button>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: STYLE.blue,
    padding: 5,
    borderRadius: 10
  }
})
export default ButtonComponent