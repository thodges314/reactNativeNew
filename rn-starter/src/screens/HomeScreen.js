import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World!!</Text>
      <Button
        onPress={()=>console.log('Button Pressed!')}
        title='Go to Components Demo'
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
