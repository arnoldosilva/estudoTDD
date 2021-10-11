import HomeScreen from '../src/screens/HomeScreen';
import React from 'react';
import {render} from '@testing-library/react-native'


describe('HomeScreen', () => {
  test('should show intro screen', () => {
    const container = render(<HomeScreen />)
    container.getByTestId('intro')
  })
  
})

describe('Fake Time', () => {
//  beforeEach( ()=>{
//   test('should show timers', () => {
//     jest.useFakeTimers('modern')
//     jest.setSystemTime(1633782236)
//   }) 
//  })



//  afterEach( ()=>{
//   jest.useRealTimers()
//  })

 test('should contain current timer', () => {
   const wraper = render(<HomeScreen />)
   wraper.getByText('11 October 21')
 })
 test('should contain current day od week', () => {
   const wraper = render(<HomeScreen />)
   wraper.getByText('Monday')
 })
 

})

