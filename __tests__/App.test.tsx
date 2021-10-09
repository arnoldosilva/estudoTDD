import React from 'react';
import {render} from '@testing-library/react-native'
import App from '../App'

describe('Load App', () => {
  test('should load app', () => {
    render(<App />)
  })
  
  test('should load intro', () => {
    const wrarp = render(<App />)
    wrarp.getByTestId('app')
  })
  
})
