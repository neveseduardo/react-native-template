import React from 'react'
import {
    configureFonts,
    DefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper'
import fonts from '~utils/fonts'
import colors from '~utils/colors'

const fontConfig = {
    default: {
        regular: {
            fontFamily: fonts.POPPINS_REGULAR,
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: fonts.POPPINS_MEDIUM,
            fontWeight: 'normal',
        },
        light: {
            fontFamily: fonts.POPPINS_LIGHT,
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: fonts.POPPINS_THIN,
            fontWeight: 'normal',
        },
    },
}

const theme = {
    ...DefaultTheme,
    dark: false,
    // roundness: 10,
    fonts: configureFonts(fontConfig),
    colors: {
        ...DefaultTheme.colors,
        primary: colors.PRIMARY,
        accent: colors.DEFAULT,
        background: colors.WHITE,
    },
    animation: {
        scale: 1.0,
    },
}

export const Provider = ({children, ...props}) => (
    <PaperProvider {...props} theme={theme}>
        {children}
    </PaperProvider>
)
export default Provider
