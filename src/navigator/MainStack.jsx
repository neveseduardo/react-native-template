import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from '~screens/Home/Home'
import ProfileScreen from '~screens/Home/Profile'

const Stack = createNativeStackNavigator()

function MainStack() {
    
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default MainStack
