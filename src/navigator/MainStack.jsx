import React from 'react'
import {View, Image} from 'react-native'
import {Text} from '~components/'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'
import HomeScreen from '~screens/Home/Home'
import ProfileScreen from '~screens/Home/Profile'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from '~styles/'

const Drawer = createDrawerNavigator()
const image = 'https://source.unsplash.com/400x400/?face'

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={[styles.drawer.content]}>
                <Image
                    source={{uri: image}}
                    resizeMode="contain"
                    style={[styles.drawer.profileImage]}
                />
                <Text>John Due</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

function MainStack() {
    return (
        <Drawer.Navigator
            initialRouteName={'Home'}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: 'Início',
                    drawerLabel: 'Início',
                    drawerIcon: ({tintColor}) => (
                        <AntDesign name="home" size={20} color={tintColor} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerTitle: 'Perfil',
                    drawerLabel: 'Perfil',
                    drawerIcon: ({tintColor}) => (
                        <AntDesign name="user" size={20} color={tintColor} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default MainStack
