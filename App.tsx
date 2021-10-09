import React from 'react'
import { View, StyleSheet } from 'react-native'
import Intro from './src/Intro'

interface Props {
  
}

const App = (props: Props) => {
  return (
    <View style={styles.container} testID="app">
      <Intro />
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
