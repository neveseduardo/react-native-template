import React from 'react'
import {Text} from 'react-native'
import styles from '~styles/'

const CustomText = ({children, style, ...props}) => {
    let myStyle = [styles.fonts.default.regular]
    if (Array.isArray(style)) myStyle.push(style)
    else myStyle.push({...style})

    return (
        <Text {...props} style={myStyle}>
            {children}
        </Text>
    )
}

export default CustomText
