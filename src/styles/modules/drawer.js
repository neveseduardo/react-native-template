import {StyleSheet} from 'react-native'
import colors from '~utils/colors'

const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.WHITE,
        paddingHorizontal: 10,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    }
})
export default styles
