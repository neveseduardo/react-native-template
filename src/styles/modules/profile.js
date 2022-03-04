import {StyleSheet} from 'react-native'
import colors from '~utils/colors'

const styles = StyleSheet.create({
    profileData: {
        flexDirection: 'row',
        backgroundColor: colors.DEFAULT,
    },
    profileDataTextWrapp: {
        justifyContent: 'center',
    },
    profileDataText: {
        flexDirection: 'row',
    },
    profileIconText: {
        marginRight: 15,
        color: colors.WHITE,
    },
    profileImage: {
        width: 120,
        height: 120,
        marginRight: 20,
        borderWidth: 5,
        borderColor: colors.WHITE,
        borderRadius: 120 / 2,
        overflow: 'hidden',
    },
    logoutButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fbfbfb',
    },
    logoutButtonIcon: {
        color: colors.DEFAULT,
        marginRight: 15,
    },
    logoutButtonText: {
        color: colors.DEFAULT,
    },
    optionsWrapp: {
        flex: 1,
    },
    optionsItem: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    optionsItemIcon: {
        marginRight: 15,
        color: colors.BLACK,
    },
    optionsItemText: {
        color: colors.BLACK,
    },
})
export default styles
