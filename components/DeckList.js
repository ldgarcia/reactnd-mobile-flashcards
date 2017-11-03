import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

class DeckList extends React.Component {

  render() {
    const { decks } = this.props
    return (
      <FlatList
        data={decks.sort((a, b) => a.title < b.title)}
        renderItem={this.renderDeck}
        contentContainerStyle={styles.container}
        keyExtractor={(item, index) => item.title}
      />
    )
  }

  renderDeck = ({ item }) => {
    const { navigation } = this.props
    const { title, questions } = item
    return (
      <TouchableOpacity
        key={title}
        style={styles.card}
        onPress={() => navigation.navigate(
                        'Deck',
                        { title, },
                )}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardCount}>
          {questions.length} {questions.length !== 1 ? 'cards' : 'card'}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  card: {
    backgroundColor: colors.blue,
    borderRadius: 5,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
  },
  title: {
    fontSize: 24,
    color: colors.white,
  },
  cardCount: {
    fontSize: 18,
    color: colors.white,
  }
})

export default DeckList
