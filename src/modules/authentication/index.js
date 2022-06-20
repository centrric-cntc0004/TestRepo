import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/01_login'
import Splash from './screens/02_splash'


const Stack = createStackNavigator()

const AuthScreen = () => {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Splash"
        >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />


        </Stack.Navigator>
    )
}

export default AuthScreen