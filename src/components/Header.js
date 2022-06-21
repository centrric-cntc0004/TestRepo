import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'



let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
let a = 0
const Header = ({ title }) => {
    return (
        <View style={styles.containerStyle} >
            <View style={styles.sliderContainerStyle} >
               
                    <Text style={{marginLeft:20, color: '#000', textAlign: 'center', fontSize: 18,marginBottom:8 }}>{title}</Text>

            </View>
        </View>
    )
}




const styles = StyleSheet.create({
    containerStyle: {
        alignSelf: 'center',
        width: width,
        overflow: 'hidden',
        height: 65,
        zIndex: 65,
        backgroundColor: mainWhite

    },
    riderRatingContainer: {
        alignSelf: 'center',
        width: width,
        overflow: 'hidden',
        height: 230,
        zIndex: 100,
        paddingTop: 20,
        backgroundColor: '#000'
    },
    sliderContainerStyle: {
        borderRadius: width,
        paddingLeft: 40,
        marginTop:13,
        flexDirection: 'row'

    },
    slider: {
        width: width,
        position: 'absolute',
        bottom: 0,

    }
});




export {
    Header,
   

}
