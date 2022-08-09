import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'


const Home = ({ navigation }) => {
  return (
    <View style={ styles.Main}>
      <View style={ styles.logo}>
      <Image
          style={{width: '20%', height: '15%'}}
          source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Boys%27_Brigade_Anchor_%28traditional_colour_version%29.svg/1200px-Boys%27_Brigade_Anchor_%28traditional_colour_version%29.svg.png'}}
      />
      <Image
          style={{width: '20%', height: '15%'}}
          source={{uri:'https://www.pngitem.com/pimgs/m/116-1165023_girls-brigade-logo-hd-png-download.png'}}
      />
      <Image
          style={{width: '23%', height: '15%'}}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI77hJdrjzdTfv9N5wfx4csXsJQIJtL6Elz1rIPu_Nw&s'}}
      />
      </View>
      <Button
        title="Registration Page"
        onPress={() => navigation.navigate('About')}        
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    Main: {
        flex: 1,
    },
    logo: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
  },
})