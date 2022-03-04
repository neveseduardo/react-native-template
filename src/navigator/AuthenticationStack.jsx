import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import WelcomeScreen from '~screens/Authentication/Welcome'
import LoginScreen from '~screens/Authentication/Login'
import RegisterScreen from '~screens/Authentication/Register'
import ForgotPasswordScreen from '~screens/Authentication/ForgotPassword'
import ResetPasswordScreen from '~screens/Authentication/ResetPassword'

const Stack = createNativeStackNavigator()

function AuthenticationStack() {
    return (
        <Stack.Navigator initialRouteName={'Welcome'}>
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                    headerTitle: '',
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    headerShown: false,
                    headerTitle: '',
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{
                    headerShown: false,
                    headerTitle: '',
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPasswordScreen}
                options={{
                    headerShown: false,
                    headerTitle: '',
                    headerShadowVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthenticationStack
