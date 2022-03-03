import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {Text, Button} from '~components'
import styles from '~styles/'
import {useNavigation} from '@react-navigation/native'
import colors from '~utils/colors'

const Welcome = () => {
    const navigator = useNavigation()

    return (
        <View style={[styles.authentication.welcome.container]}>
            <View style={[styles.authentication.welcome.content]}>
                <View style={[styles.authentication.welcome.logoContainer]}>
                    <Text>Bem vindo</Text>
                </View>
                <View style={[styles.authentication.welcome.loginInfo]}>
                    <Text>Faça login na plataforma</Text>
                </View>
                <View style={[styles.authentication.welcome.buttonsWrapper]}>
                    <Button
                        icon="facebook"
                        mode="contained"
                        color={styles.colors.WHITE}
                        style={[
                            styles.buttons.facebook,
                            styles.buttons.largeButton,
                            styles.containers.marginBottom(10),
                        ]}
                        onPress={() => console.log('Pressed')}>
                        Facebook
                    </Button>
                    <Button
                        icon="google"
                        mode="contained"
                        color={styles.colors.WHITE}
                        style={[
                            styles.buttons.google,
                            styles.buttons.largeButton,
                            styles.containers.marginBottom(10),
                        ]}
                        onPress={() => console.log('Pressed')}>
                        Google
                    </Button>

                    <Button
                        icon="email"
                        mode="contained"
                        color={styles.colors.WHITE}
                        style={[
                            styles.buttons.default,
                            styles.buttons.largeButton,
                            styles.containers.marginBottom(10),
                        ]}
                        onPress={() => navigator.navigate('Login')}>
                        Email
                    </Button>
                </View>
            </View>

            <View style={[styles.authentication.welcome.terms]}>
                <Text>Ao fazer login você está concordando com nossos</Text>
                <TouchableOpacity>
                    <Text style={[styles.authentication.welcome.links]}>
                        temos de uso
                    </Text>
                </TouchableOpacity>
                <Text>e nossas</Text>
                <TouchableOpacity>
                    <Text style={[styles.authentication.welcome.links]}>
                        politicas de privacidade de dados
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome
