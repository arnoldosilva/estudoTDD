import React from 'react';
import {render} from '@testing-library/react-native'
// import WeatherCurrent from '../src/WeatherCurrent'
import Intro from '../src/Intro'

describe('Intro Screen', () => {
  test('should show intro screen', () => {
    const container = render(<Intro />)
    container.getByTestId('WeatherCurrent')
  })
  
})

