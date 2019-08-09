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
