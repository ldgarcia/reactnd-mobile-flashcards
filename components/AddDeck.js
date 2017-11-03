import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import SubmitButton from './SubmitButton'
import colors from '../utils/colors'

class AddDeck extends React.Component {
  render() {
    const { title, onTitleChange, onSubmit } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter title'
          value={title}
          onChangeText={onTitleChange}
        />
        <SubmitButton
          onPress={onSubmit}
          disabled={title === ''}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: colors.darkGray,
    textAlign: 'center',
  },
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: colors.blue,
  },
  disabledSubmitButton: {
    backgroundColor: colors.gray,
  },
  disabledSubmitText: {
    fontSize: 24,
    color: colors.darkGray,
  },
  submitText: {
    fontSize: 24,
    color: colors.white,
  },
  input: {
    height: 60,
    width: '90%',
    marginTop: 20,
    backgroundColor: colors.gray,
    borderRadius: 5,
    padding: 20,
  },
})

export default AddDeck
