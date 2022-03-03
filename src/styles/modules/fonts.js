import {StyleSheet} from 'react-native'
import fonts from '~utils/fonts'

const styles = StyleSheet.create({
    default: {
        bold: {
            fontFamily: fonts.POPPINS_BOLD,
        },
        regular: {
            fontFamily: fonts.POPPINS_REGULAR,
        },
        thin: {
            fontFamily: fonts.POPPINS_THIN,
        },
    },
})

export default styles
