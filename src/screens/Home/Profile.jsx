import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {Text} from '~components/'
import {useNavigation} from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import styles from '~styles/'

const Profile = ({navigation, ...props}) => {
    const navigator = useNavigation()
    const image = 'https://source.unsplash.com/400x400/?face'

    return (
        <View style={{flex: 1}}>
            <View
                style={[
                    styles.dimensions.paddings.padding(20),
                    styles.profile.profileData,
                ]}>
                <Image
                    source={{uri: image}}
                    resizeMode="cover"
                    style={[styles.profile.profileImage]}
                />
                <View style={[styles.profile.profileDataTextWrapp]}>
                    <View style={[styles.profile.profileDataText]}>
                        <AntDesign
                            name="user"
                            size={18}
                            style={[styles.profile.profileIconText]}
                        />
                        <Text style={{color: styles.colors.WHITE}}>
                            John Due
                        </Text>
                    </View>
                    <View style={[styles.profile.profileDataText]}>
                        <AntDesign
                            name="mail"
                            size={18}
                            style={[styles.profile.profileIconText]}
                        />
                        <Text style={{color: styles.colors.WHITE}}>
                            jhondue@email.com
                        </Text>
                    </View>
                </View>
            </View>

            <View style={[styles.profile.optionsWrapp]}>
                <TouchableOpacity style={[styles.profile.optionsItem]}>
                    <Feather
                        style={[styles.profile.optionsItemIcon]}
                        name="edit"
                        size={18}
                    />
                    <Text style={[styles.profile.optionsItemText]}>Editar perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.profile.optionsItem]}>
                    <Feather
                        style={[styles.profile.optionsItemIcon]}
                        name="mail"
                        size={18}
                    />
                    <Text style={[styles.profile.optionsItemText]}>Mensagens</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.profile.optionsItem]}>
                    <Feather
                        style={[styles.profile.optionsItemIcon]}
                        name="settings"
                        size={18}
                    />
                    <Text style={[styles.profile.optionsItemText]}>Preferências</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={[styles.profile.logoutButton]}
                    onPress={() =>
                        navigator.navigate('Authentication', {screen: 'Login'})
                    }>
                    <AntDesign
                        name="poweroff"
                        size={18}
                        style={[styles.profile.logoutButtonIcon]}
                    />
                    <Text style={[styles.profile.logoutButtonText]}>Sair da sessão</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile
