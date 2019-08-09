import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 76 },
    { name: 'Friend #2', age: 94 },
    { name: 'Friend #3', age: 67 },
    { name: 'Friend #4', age: 86 },
    { name: 'Friend #5', age: 36 },
    { name: 'Friend #6', age: 54 },
    { name: 'Friend #7', age: 59 },
    { name: 'Friend #8', age: 63 },
    { name: 'Friend #9', age: 90 }
  ]
  return (
    <FlatList 
      data = {friends}
      keyExtractor = {friend => friend.name}
      renderItem = { ({item}) => <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20
  }
})

export default ListScreen
