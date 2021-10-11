import React from 'react'
import { View, StyleSheet } from 'react-native'
import Index from './src/screens/Index';

interface Props {
  
}

const App = (props: Props) => {
  return (
    <View style={styles.container} testID="app">
      <Index />
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
