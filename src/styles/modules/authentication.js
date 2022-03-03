import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    welcome: {
        container: {
            flex: 1,
            width: width,
            height: height,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
        },
        terms: {
            backgroundColor: '#fff',
            padding: 20,
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        content: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        logoContainer: {
            flex: 1,
            height: 10 * 5,
            width: '100%',
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        links: {
            color: '#51bcda',
            fontWeight: 'bold',
            marginHorizontal: 10,
        },
        buttonsWrapper: {
            width: '100%',
            padding: 20,
        },
        loginInfo: {
            paddingVertical: 10,
        },
    },
    login: {
        container: {},
        logoContainer: {
            padding: 20,
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
        },
        formContainer: {
            paddingHorizontal: 20,
            flex: 1,
            width: '100%',
            // backgroundColor: 'blue',
        },
    },
})

export default styles
