import React, {useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AuthenticationStack from '~navigator/AuthenticationStack'
import MainStack from '~navigator/MainStack'
import SplashScreen from '~screens/Splash'

const Stack = createNativeStackNavigator()

function App() {
    const timeout = 1000
    const navigator = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigator.navigate('Main')
        }, timeout)
    })

    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Main"
                component={MainStack}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Authentication"
                component={AuthenticationStack}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default App
