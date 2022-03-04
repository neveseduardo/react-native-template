import React from 'react'
import {Text} from 'react-native'
import styles from '~styles/'

const CustomText = ({children, style, type = 'normal', ...props}) => {
    let myStyle = [
        type === 'normal'
            ? styles.fonts.default.regular
            : styles.fonts.default.bold,
    ]
    if (Array.isArray(style)) myStyle.push(style)
    else myStyle.push({...style})

    return (
        <Text {...props} style={myStyle}>
            {children}
        </Text>
    )
}

export default CustomText
