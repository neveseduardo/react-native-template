import React, {useState} from 'react'
import {View} from 'react-native'
import {Input} from '~components/'
import styles from '~styles/'
import {Button} from '~components'
import {useNavigation} from '@react-navigation/native'
import { Text } from '~components/'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                <Input
                    mode="outlined"
                    label="Senha"
                    value={password}
                    setValue={text => setPassword(text)}
                    style={[styles.dimensions.margins.marginBottom(10)]}
                />
                <Button
                    type="primary"
                    onPress={() =>
                        navigator.navigate('Main', {screen: 'Home'})
                    }>
                    Entrar
                </Button>

                <View style={{flexDirection: 'row'}}>
                    <Button
                        style={{flex: 1}}
                        type="link"
                        onPress={() => navigator.navigate('Register')}>
                        Criar conta
                    </Button>

                    <Button
                        style={{flex: 1}}
                        type="link"
                        onPress={() => navigator.navigate('ForgotPassword')}>
                        Senha?
                    </Button>
                </View>
                <Button
                    type="link"
                    icon={({ size, color }) => (<AntDesign name="arrowleft" size={size} color={color} />)}
                    onPress={() =>
                        navigator.navigate('Welcome')
                    }>
                    Voltar
                </Button>
            </View>
        </View>
    )
}

export default Login
