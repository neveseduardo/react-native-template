import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    margins: {
        marginBottom: margin => ({ marginBottom: margin }),
        marginTop: margin => ({ marginTop: margin }),
        marginLeft: margin => ({ marginLeft: margin }),
        marginRight: margin => ({ marginRight: margin }),
        marginH: margin => ({ marginHorizontal: margin }),
        marginV: margin => ({ marginVertical: margin }),
    },
    paddigns: {
        paddingBottom: padding => ({ paddingBottom: padding }),
        paddingTop: padding => ({ paddingTop: padding }),
        paddingLeft: padding => ({ paddingLeft: padding }),
        paddingRight: padding => ({ paddingRight: padding }),
        paddingH: padding => ({ paddingHorizontal: padding }),
        paddingV: padding => ({ paddingVertical: padding }),
    },
})

export default styles
