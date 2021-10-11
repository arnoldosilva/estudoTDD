import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppNavigator from './src/AppNavigator';

interface Props {
  
}

const App = (props: Props) => {
  return (
    <View style={styles.container} testID="app">
      <AppNavigator />
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
