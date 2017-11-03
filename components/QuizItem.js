import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import colors from '../utils/colors'

class QuizItem extends React.Component {
  render() {
    const { currentCardIndex, currentCardSide, questions, onFlip, onCorrect, onIncorrect, } = this.props
    const { question, answer } = questions[currentCardIndex]
    return (
      <View style={styles.container}>
        <Text style={styles.index}>
          {currentCardIndex+1}/{questions.length}
        </Text>
        <Text style={styles.title}>
          {currentCardSide === 'question' ? question : answer}
        </Text>
        <TouchableOpacity
          onPress={onFlip}
        >
          <Text style={styles.flipButtonText}>
            {currentCardSide === 'question' ? 'View Answer' : 'View Question'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.correctButton]}
          onPress={onCorrect}
        >
          <Text style={styles.submitText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.incorrectButton]}
          onPress={onIncorrect}
        >
          <Text style={styles.submitText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  index: {
    fontSize: 20,
    marginBottom: 50,
    alignSelf: 'flex-start',
    color: colors.blue,
    marginTop: 10,
    marginLeft: 10,
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
    width: '80%',
    alignItems: 'center',
  },
  correctButton: {
    backgroundColor: colors.green,
  },
  incorrectButton: {
    backgroundColor: colors.red,
  },
  submitText: {
    fontSize: 24,
    color: colors.white,
  },
  flipButtonText: {
    fontSize: 20,
    color: colors.blue,
  },
})

export default QuizItem
