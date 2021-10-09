import React from 'react'
import { View, Text } from 'react-native'

interface Props {
  
}

const WeatherCurrent = (props: Props) => {
  return (
    <View testID="WeatherCurrent">
      <Text>Current Weather</Text>
    </View>
  )
}

export default WeatherCurrent
