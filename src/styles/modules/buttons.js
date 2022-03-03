import {StyleSheet} from 'react-native'
import colors from '~utils/colors'

const styles = StyleSheet.create({
    default: {
        backgroundColor: colors.DEFAULT,
        color: colors.WHITE,
    },
    primary: {
        backgroundColor: colors.PRIMARY,
        color: colors.WHITE,
    },
    success: {
        backgroundColor: colors.SUCCESS,
        color: colors.WHITE,
    },
    danger: {
        backgroundColor: colors.DANGER,
        color: colors.WHITE,
    },
    warning: {
        backgroundColor: colors.WARNING,
        color: colors.WHITE,
    },
    info: {
        backgroundColor: colors.INFO,
        color: colors.WHITE,
    },
    link: {
        backgroundColor: 'transparent',
        color: colors.LINK,
    },
    facebook: {
        backgroundColor: colors.FACEBOOK,
        color: colors.WHITE,
    },
    google: {
        backgroundColor: colors.GOOGLE,
        color: colors.WHITE,
    },
})

export default styles
