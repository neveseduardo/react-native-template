import React from 'react'
import {TextInput} from 'react-native-paper'
import styles from '~styles/'
import {TextInput as NativeTextInput} from 'react-native'

const Input = ({label, value, setValue, style, ...props}) => {
    let myStyle = [
        styles.fonts.default.regular,
        {
            backgroundColor: styles.colors.WHITE,
            height: 50,
        },
    ]
    if (Array.isArray(style)) myStyle.push(style)
    else myStyle.push({...style})

    const render = props => (
        <NativeTextInput {...props} style={[{paddingHorizontal: 15}, styles.fonts.default.regula]} />
    )

    return (
        <TextInput
            {...props}
            style={myStyle}
            label={label}
            value={value}
            onChangeText={text => setValue(text)}
            render={render}
        />
    )
}
Input.defaultProps = {
    label: '',
    value: '',
    setValue: text => text,
}

export default Input
