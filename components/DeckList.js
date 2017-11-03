import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import colors from '../utils/colors'

class DeckList extends React.Component {

  render() {
    const { decks } = this.props
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={decks.sort((a, b) => a.title < b.title)}
        renderItem={this.renderDeck}
        keyExtractor={(item, index) => item.title}
        ListEmptyComponent={this.renderEmpty}
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

  renderEmpty = () => (
    <View style={[styles.container, {alignItems: 'center',}]}>
      <Text style={styles.noDecksText}>
        You have no decks yet
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
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
  noDecksText: {
    fontSize: 24,
    color: colors.darkGray,
  },
  cardCount: {
    fontSize: 18,
    color: colors.white,
  }
})

export default DeckList
