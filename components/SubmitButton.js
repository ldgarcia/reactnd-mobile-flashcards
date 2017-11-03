import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

function SubmitButton({onPress, disabled}) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabledButton : styles.submitButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={disabled ? styles.disabledText : styles.text}>Submit</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: colors.blue,
  },
  disabledButton: {
    backgroundColor: colors.gray,
  },
  disabledText: {
    fontSize: 24,
    color: colors.darkGray,
  },
  text: {
    fontSize: 24,
    color: colors.white,
  },
})

export default SubmitButton
