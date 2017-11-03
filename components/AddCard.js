import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import SolidButton from './SolidButton'
import colors from '../utils/colors'

class AddCard extends React.Component {
  render() {
    const { question, answer, onQuestionChange, onAnswerChange, onSubmit } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Question
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter question'
          value={question}
          onChangeText={onQuestionChange}
        />
        <Text style={styles.title}>
          Answer
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter answer'
          value={answer}
          onChangeText={onAnswerChange}
        />
        <SolidButton
          onPress={onSubmit}
          disabled={question === '' || answer === ''}
          text='Submit'
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
