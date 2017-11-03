import React from 'react'
import { StackNavigator } from 'react-navigation'
import Tabs from './Tabs'
import Deck from '../containers/Deck'
import AddCard from '../containers/AddCard'

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    path: 'deck/:title',
    screen: Deck,
  },
  AddCard: {
    path: 'add-card/:title',
    screen: AddCard,
  }
})

export default MainNavigator
