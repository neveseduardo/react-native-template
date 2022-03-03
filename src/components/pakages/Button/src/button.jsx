import React from 'react'
import {Button as PaperButton} from 'react-native-paper'
import styles from '~styles/'

const Button = ({children, color, type, mode, ...props}) => {
    let disabled = props.disabled || props.loading
    const [s, m, c] = styleMaker(type, mode, disabled, props.style)
    return (
        <PaperButton
            {...props}
            color={c}
            disabled={disabled}
            mode={m}
            labelStyle={{color: c}}
            style={s}>
            {children}
        </PaperButton>
    )
}

const styleMaker = (t, m, d = false, s = {}) => {
    let style = [],
        mode,
        color
    color = styles.colors[String(t).toUpperCase()]
    style.push(styles.dimensions.margins.marginBottom(10))

    if (d) style.push({opacity: 0.5})

    if (m === 'outlined') {
        style.push({
            borderColor: color,
            backgroundColor: styles.colors.WHITE,
            borderWidth: 2,
        })
        mode = 'outlined'
        color = color
    } else if (t === 'link') {
        style = []
        mode = 'text'
        color = styles.colors.LINK
    } else {
        style.push({backgroundColor: color})
        mode = 'contained'
        color = styles.colors.WHITE
    }
    if (Array.isArray(s)) style = [...style, ...s]
    else style.push({ ...s })
    
    return [style, mode, color]
}
export default Button
