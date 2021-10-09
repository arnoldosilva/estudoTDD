import React from 'react';
import {View} from 'react-native'
import {render} from '@testing-library/react-native'
import WeatherCordinates from '../src/WeatherCordinates'
import Intro from '../src/Intro'

jest.mock('../src/WeatherCordinates', ()=> jest.fn())

describe('WeatherCordinates mock test', () => {
  test('should show mock weather cordinates', () => {

    // (WeatherCordinates as jest.Mock).mockImplementation(()=> <View testID="mock-WeatherCordinates" /> )
    
    // const wrapper = render(<Intro />)
    // wrapper.getByTestId('mock-WeatherCordinates')

    (WeatherCordinates as jest.Mock).mockReturnValue(<View testID="mock-WeatherCordinates"/>)

    const wrapper = render(<Intro />)
    wrapper.getByTestId("mock-WeatherCordinates")

  })
  
})
