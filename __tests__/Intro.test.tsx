import Intro from '../src/Intro';
import React from 'react';
import {render} from '@testing-library/react-native'


describe('Intro Screen', () => {
  test('should show intro screen', () => {
    const container = render(<Intro />)
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
   const wraper = render(<Intro />)
   wraper.getByText('09 October 21')
 })
 test('should contain current day od week', () => {
   const wraper = render(<Intro />)
   wraper.getByText('Saturday')
 })
 

})

