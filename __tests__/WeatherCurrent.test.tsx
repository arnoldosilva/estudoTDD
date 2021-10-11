import React from 'react';
import {render} from '@testing-library/react-native'
// import WeatherCurrent from '../src/WeatherCurrent'
import HomeScreen from '../src/HomeScreen'

describe('Intro Screen', () => {
  test('should show intro screen', () => {
    const container = render(<HomeScreen />)
    container.getByTestId('WeatherCurrent')
  })
  
})

