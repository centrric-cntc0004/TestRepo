
import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native'
import { BackgroundImage, IconImage } from '../../../components/images'



const Splash = ({ dispatch, navigation }) => {

    //hide splash 
    const Hide_Splash_Screen = () => {
        navigation.navigate('Login')
    }

    //set duration for splash 
    useEffect(() => {
        setTimeout(function () {
            Hide_Splash_Screen();
        }, 5000);
    }, [])




    return (
        <View style={styles.MainContainer}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={IconImage} />
            </View>
            <View style={styles.SplashScreen_RootView}>
                <View style={styles.SplashScreen_ChildView}>
                    <ImageBackground source={BackgroundImage}
                        style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </View>
            </View>

        </View>

    )
}
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: (Platform.OS === 'ios') ? 20 : 0
        },

        SplashScreen_RootView:
        {
            justifyContent: 'center',
            flex: 1,
            margin: 10,
            position: 'absolute',
            width: '100%',
            height: '100%',
        },

        SplashScreen_ChildView:
        {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        },
    });







export default Splash