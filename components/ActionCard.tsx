import { StyleSheet, Text, View ,Linking, Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
 function openWebsite(webSiteLink:string){
    Linking.openURL(webSiteLink)
 }
    return (
    <View style={styles.headingText}>
      <Text>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}></View>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText} >
            What's new in Javascript 21 - ES12
        </Text>
      </View>
      <Image
      source={{
        uri : 'https://via.placeholder.com/300/09f/fff.png'
      }}
      style={styles.cardImage}
      />
      <View style={styles.bodyContainer}>
        <Text numberOfLines={3}>
        Our JavaScript Tutorial is designed for beginners and professionals both. JavaScript is used to create client-side dynamic pages.
        JavaScript is an object-based scripting language which is lightweight and cross-platform.
        JavaScript is not a compiled language, but it is a translated language. The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser.
        </Text>
      </View>

      <View style={styles.footerContainer}>
       <TouchableOpacity
       onPress={()=> openWebsite('https://www.javatpoint.com/javascript-tutorial')}>
        <Text style={styles.socialLinks}>Read More</Text>
       </TouchableOpacity>
       <TouchableOpacity
       onPress={()=> openWebsite('https://www.geeksforgeeks.org/java-exercises/')}>
        <Text style={styles.socialLinks}>Follow me</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    card:{},
    elevatedCard:{},
    headingContainer:{},
    headerText:{},
    cardImage:{
        height:100
    },
    bodyContainer:{},
    footerContainer:{},
    socialLinks:{}

})