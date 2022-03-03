import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '~styles/'

const Profile = ({navigation, ...props}) => {
    function handleNavigation(screenName) {
        navigation.navigate(screenName)
    }
    return (
        <View style={[styles.containers.default]}>
            <View >
                <TouchableOpacity
                    style={[styles.buttons.default]}
                    onPress={() => handleNavigation('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile
