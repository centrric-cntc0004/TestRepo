import React, { useEffect } from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { connect } from 'react-redux'
import DefaultHome from './screens/Home'


const Stack = createStackNavigator()

const HomeScreen = ({ ownProps, }) => {



    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            initialRouteName="home"
        >
            <Stack.Screen name="home" component={DefaultHome}
                options={{
                    title: 'Home',

                }}

            />


        </Stack.Navigator>
    )
}


const mapStateToProps = (state, ownProps) => {
    return { ownProps };
}



const mapDispatchToProps = (dispatch) => {
    return {


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)






