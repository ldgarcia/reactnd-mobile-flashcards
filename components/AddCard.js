import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../utils/colors'

class AddCard extends React.Component {
  render() {
    const { onQuestionChange, onAnswerChange, onSubmit } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Question
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter question'
          onChangeText={onQuestionChange}
        />
        <Text style={styles.title}>
          Answer
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter answer'
          onChangeText={onAnswerChange}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={onSubmit}
        >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
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
  submitButton: {
    padding: 10,
    marginTop: 20,
    backgroundColor: colors.blue,
    borderRadius: 5,
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

export default AddCard
