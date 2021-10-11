import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import {Colors} from './consts/colors'
import moment from 'moment';
import WeatherCurrent from './WeatherCurrent';
import WeatherCordinates from './WeatherCordinates'

interface Props {
  
}

const HomeScreen = (props: Props) => {
  const [date, setDate] = useState('')
  const [weekDay, setWeekDay] = useState('')

  useEffect(() => {
    setDate(moment().format('DD MMMM YY'))
    setWeekDay(moment().format('dddd'))
  }, [])


  return (
    <LinearGradient 
      colors={[Colors.Ligth_GRAY, Colors.DARKER_GRAY]}
      testID="intro"
      style={styles.container}
      > 
        <View style={styles.title}>
          <WeatherCurrent />
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.weekDay}>{weekDay}</Text>
          <WeatherCordinates />
        </View>

    </LinearGradient>
  );
}

export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:35,
    alignContent:'space-between',
    justifyContent: 'space-evenly',
  },
  title:{
    justifyContent:"flex-end"
  },
  date:{
    color:Colors.GRAY,
    fontSize:15,
  } ,
  weekDay:{
    color:Colors.Withe,
    fontSize:22
  }
});

