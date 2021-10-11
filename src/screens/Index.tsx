import React from 'react'
import HomeScreen from '../HomeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

interface Props {
  
}

const AppNavigator = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>    
    </NavigationContainer>
  )
}

export default AppNavigator
