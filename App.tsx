import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {

    return (
      <SafeAreaView>
        <ScrollView>
        <FlatCards></FlatCards>
        <ElevatedCards></ElevatedCards>
        <FancyCard></FancyCard>
        <ActionCard></ActionCard>
        <ContactList></ContactList>
        </ScrollView>
      </SafeAreaView>
    )
  
}

export default App

