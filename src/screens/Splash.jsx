import React from 'react'
import {View, Text, StatusBar, ActivityIndicator} from 'react-native'
import styles from '~styles/'

const Splash = () => {
    return (
        <View style={[styles.splash.container]}>
            <StatusBar
                backgroundColor="#333333"
                barStyle="light-content"
                hidden={true}
            />
            <View style={[styles.splash.logo]}>
                <View>
                    <Text style={[styles.splash.logoText]}>Fontools</Text>
                    <ActivityIndicator size="large" color="tomato" />
                </View>
            </View>
            <View style={[styles.splash.footer]}>
                <Text>Fintools | Desenvolvimento e tecnologia</Text>
            </View>
        </View>
    )
}

export default Splash
