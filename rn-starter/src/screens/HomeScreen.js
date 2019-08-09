import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({navigation: {navigate}}) => {
  return (
    <View>
      <Text style={styles.text}>Hello World!!</Text>
      <Button
        onPress={()=>navigate('Components')}
        title='Go to Components Demo'
      />
      <TouchableOpacity
        onPress={()=>console.log('List pressed')}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
