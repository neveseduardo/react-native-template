import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Text} from '~components/'
import styles from '~styles/'
import {Button, ThemeProvider} from 'react-native-paper'

const Home = ({navigation, ...props}) => {
    function handleNavigation(screenName) {
        navigation.navigate(screenName)
    }
    return (
        <View>
            <Text>HOME</Text>
        </View>
    )
}

export default Home
