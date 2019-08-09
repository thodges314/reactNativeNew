import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World!!</Text>
      <Button
        onPress={()=>console.log('Button Pressed!')}
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
