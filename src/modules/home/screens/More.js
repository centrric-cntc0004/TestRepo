import React from 'react'
import { View, Text, } from 'react-native'

const More = ({ navigation, route }) => {
    const RenderForm = () => {
        return (


            <View style={{ flex: 1, marginLeft: 10, paddingRight: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Page</Text>
            </View>
        )

    }
    return (


        <RenderForm />

    )
}

export default More
