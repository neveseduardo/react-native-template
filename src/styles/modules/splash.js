import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        alignItems: 'center',
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'tomato',
        marginBottom: 20,
    },
    footer: {
        width: width,
        alignItems: 'center',
        paddingVertical: 20,
    },
})

export default styles
