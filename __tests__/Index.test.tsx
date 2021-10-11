import React from 'react'
import {render, waitFor} from '@testing-library/react-native'
import AppNavigator from '../src/screens/Index'
import HomeScreen from '../src/HomeScreen'
import { View } from 'react-native'


jest.mock('../src/HomeScreen', ()=> jest.fn())

describe('App Navigator', () => {
  test('should show intro screen from navigator', async() => {
    (HomeScreen as jest.Mock).mockReturnValueOnce(<View testID='mock-HomeScreen'/>)
    const wrapper = render(<AppNavigator />)

    await waitFor( ()=>{
      wrapper.getByTestId('mock-HomeScreen')
    })
  })
  
})
