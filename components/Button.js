import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

function Button({onPress, disabled, text, additionalStyles=[]}) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabledButton : styles.enabledButton, ...additionalStyles]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={disabled ? styles.disabledText : styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  enabledButton: {
    backgroundColor: colors.blue,
  },
  disabledButton: {
    backgroundColor: colors.gray,
  },
  text: {
    fontSize: 24,
    color: colors.white,
  },
  disabledText: {
    fontSize: 24,
    color: colors.darkGray,
  },
})

export default Button
