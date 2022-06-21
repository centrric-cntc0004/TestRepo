// import React, { useEffect } from 'react'
// import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
// import { connect } from 'react-redux'
// import DefaultHome from './screens/Home'


// const Stack = createStackNavigator()

// const HomeScreen = ({ ownProps, }) => {



//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//             }}
//             initialRouteName="home"
//         >
//             <Stack.Screen name="home" component={DefaultHome}
//                 options={{
//                     title: 'Home',

//                 }}

//             />


//         </Stack.Navigator>
//     )
// }


// const mapStateToProps = (state, ownProps) => {
//     return { ownProps };
// }



// const mapDispatchToProps = (dispatch) => {
//     return {


//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


import React, { createContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DefaultHome from './screens/Home'
import { Image, View, Dimensions } from 'react-native'
import { HomeImage, MealsImage, MoreImage, ProfileImage } from '../../components/images'
import Meals from './screens/Meals'
import Profile from './screens/Profile'
import More from './screens/More'
const { width, height } = Dimensions.get('window');
const Tab = createBottomTabNavigator();
const NavigationContext = createContext()
import { connect } from 'react-redux'
import { team_list_current } from './api/action'


const HomeScreen = ({ navigation, team_list_api }) => {
    useEffect(() => {


        const unsubscribe = navigation.addListener('focus', () => {
            team_list_api()

        });



        return () => team_list_api.remove, unsubscribe
    }, [navigation, team_list_api,]);


    return (
        <NavigationContext.Provider value={{
            drawerNavigation: navigation
        }}>
            <Tab.Navigator
                initialRouteName='home'
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#5DA7A3',
                }}

            >
                <Tab.Screen
                    name="home"
                    component={DefaultHome}

                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "red",
                        },
                        tabBarLabelStyle: { fontSize: 12 },
                        tabBarItemStyle: { width: 100 },
                        tabBarStyle: { backgroundColor: 'grey' },
                    }}
                    options={{

                        tabBarIcon: ({ tintColor }) => (
                            <View>
                                <Image style={{ width: 20, height: 20, resizeMode: "contain" }} size={25} source={HomeImage} />
                            </View>
                        ),
                        activeColor: '#5DA7A3',
                        inactiveColor: '#5DA7A3',
                        barStyle: { backgroundColor: '#5DA7A3' },



                    }}
                />

                <Tab.Screen
                    name="meals"
                    component={Meals}
                    options={{
                        tabBarLabel: 'Meals',
                        tabBarIcon: ({ tintColor }) => (
                            <View>
                                <Image style={{ width: 20, height: 20, resizeMode: "contain" }} size={25} source={MealsImage} />
                            </View>
                        ),
                        activeColor: '#5DA7A3',
                        inactiveColor: '#5DA7A3',
                        barStyle: { backgroundColor: '#5DA7A3' },



                    }}
                />
                <Tab.Screen
                    name="profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ tintColor }) => (
                            <View>
                                <Image style={{ width: 20, height: 20, resizeMode: "contain" }} size={25} source={ProfileImage} />
                            </View>
                        ),
                        activeColor: '#5DA7A3',
                        inactiveColor: '#5DA7A3',
                        barStyle: { backgroundColor: '#5DA7A3' },



                    }}
                />
                <Tab.Screen
                    name="more"
                    component={More}
                    options={{
                        tabBarLabel: 'More',
                        tabBarIcon: ({ tintColor }) => (
                            <View>
                                <Image style={{ width: 20, height: 20, resizeMode: "contain" }} size={25} source={MoreImage} />
                            </View>
                        ),
                        activeColor: '#5DA7A3',
                        inactiveColor: '#5DA7A3',
                        barStyle: { backgroundColor: '#5DA7A3' },



                    }}
                />


            </Tab.Navigator>
        </NavigationContext.Provider>
    )
}
const mapStateProps = (state, ownProps) => {


    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        team_list_api: () => dispatch(team_list_current()),




    }
}

export default connect(mapStateProps, mapDispatchToProps,)(HomeScreen)

export const NavigationConsumer = NavigationContext.Consumer




