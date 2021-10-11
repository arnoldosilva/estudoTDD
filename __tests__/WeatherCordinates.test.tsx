import React from 'react';
import {View} from 'react-native'
import {render} from '@testing-library/react-native'
import WeatherCordinates from '../src/WeatherCordinates'
import HomeScreen from '../src/screens/HomeScreen'

jest.mock('../src/WeatherCordinates', ()=> jest.fn())

describe('WeatherCordinates mock test', () => {
  test('should show mock weather cordinates', () => {

    // (WeatherCordinates as jest.Mock).mockImplementation(()=> <View testID="mock-WeatherCordinates" /> )
    
    // const wrapper = render(<Intro />)
    // wrapper.getByTestId('mock-WeatherCordinates')

    (WeatherCordinates as jest.Mock).mockReturnValue(<View testID="mock-WeatherCordinates"/>)

    const wrapper = render(<HomeScreen />)
    wrapper.getByTestId("mock-WeatherCordinates")

  })
  
})
