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
      <Button
        onPress={() => navigate('List')}
        title='Go to List Demo'
      />
      <Button
        onPress={() => navigate('Image')}
        title='Go to Image Screen'
      />
      <Button
        onPress={() => navigate('Counter')}
        title='Go to Counter Demo'
      />
      <Button
        onPress={() => navigate('Colour')}
        title='Go to Colour Demo'
      />
      <Button
        onPress={() => navigate('Square')}
        title='Go to Square Demo'
      />
      <Button
        onPress={() => navigate('Text')}
        title='Go to Text Input Demo'
      />
      <Button
        onPress={() => navigate('Box')}
        title='Go to Box Demo'
      />
      {/* <TouchableOpacity
        onPress={()=>navigate('List')}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
