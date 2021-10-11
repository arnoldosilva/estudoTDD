import Localization from '../src/service/Localization'

 describe('Localization Service', () => {
   test('should return latitude and longitude from current location', async() => {  
     const position = await Localization.getCurrentPosition()
     expect(position).toEqual({
       latitude: 0,
       longitude: 0
     })
   })
   
 })
 