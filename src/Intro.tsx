import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import {Colors} from '../src/consts/colors'
import moment from 'moment';

interface Props {
  
}

const Intro = (props: Props) => {
  const [date, setDate] = useState('')

  useEffect(() => {
    setDate(moment().format('DD MMMM YY'))
    console.log(moment().unix())
  }, [])


  return (
    <LinearGradient 
      colors={[Colors.Ligth_GRAY, Colors.DARKER_GRAY]}
      testID="intro"
      style={styles.container}
      > 
        <View style={styles.title}>
          <Text style={styles.date}>
            {date}
          </Text>
        </View>

    </LinearGradient>
  );
}

export default Intro


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
  }  
});

