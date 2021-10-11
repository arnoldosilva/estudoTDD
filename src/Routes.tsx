import React from 'react'
import HomeScreen from './screens/HomeScreen';
import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

interface Props {
  
}

const Routes = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>        
        <Stack.Screen name="Home" component={View} />
      </Stack.Navigator>    
    </NavigationContainer>
  )
}

export default Routes
