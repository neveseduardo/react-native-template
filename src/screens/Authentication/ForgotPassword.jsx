import React, {useState} from 'react'
import {View} from 'react-native'
import {Input} from '~components/'
import styles from '~styles/'
import {Button} from '~components'
import {useNavigation} from '@react-navigation/native'
import { Text } from '~components/'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const navigator = useNavigation()
    return (
        <View
            style={[
                styles.containers.default,
                styles.authentication.login.container,
            ]}>
            <View style={styles.authentication.login.logoContainer}>
                <Text>Fintools</Text>
            </View>

            <View style={styles.authentication.login.formContainer}>
                <Input
                    mode="outlined"
                    label="E-Mail"
                    value={email}
                    setValue={text => setEmail(text)}
                    style={[styles.dimensions.margins.marginBottom(10)]}
                />
                <Button type="primary" onPress={() => ({})}>
                    Enviar
                </Button>
                <Button
                    type="link"
                    icon={({ size, color }) => (<AntDesign name="arrowleft" size={size} color={color} />)}
                    onPress={() =>
                        navigator.navigate('Login')
                    }>
                    Voltar
                </Button>
            </View>
        </View>
    )
}

export default ForgotPassword
