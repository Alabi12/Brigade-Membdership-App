import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const About = ({ navigation }) => {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About</Text>
      <Button
        title="Click to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default About

const styles = StyleSheet.create({})