import React from 'react'
import {render, waitFor} from '@testing-library/react-native'
import AppNavigator from '../src/AppNavigator'
import HomeScreen from '../src/screens/HomeScreen'
import { View } from 'react-native'


jest.mock('../src/screens/HomeScreen', ()=> jest.fn())

describe('App Navigator', () => {
  test('should show intro screen from navigator', async() => {
    (HomeScreen as jest.Mock).mockReturnValueOnce(<View testID='mock-HomeScreen'/>)
    const wrapper = render(<AppNavigator />)

    await waitFor( ()=>{
      wrapper.getByTestId('mock-HomeScreen')
    })
  })
  
})
