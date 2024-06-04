import React from 'react'
import { 
    Text,
    View,
    StyleSheet,
    useColorScheme
 }from 'react-native'

function AppPro(){
   const isDarkMode = useColorScheme() === 'light'
    return(
        <View style = {styles.container}>
            <Text style = {isDarkMode ? styles.darkText
                : styles.darkText
            }>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'flex-end'
    },
    whiteText :{
     color: '#FFFFFF'
    },
    darkText :{
        color: '#000000'
    }
})

export default AppPro;