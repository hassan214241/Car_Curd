import { StyleSheet } from "react-native";
import { theme } from "../../theming";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    screen: {
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    textInput: {
        alignItems: 'center',
        height: 45,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        marginTop: 10,
        // marginBottom: 16,
    },
    textInputText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#131e22'
    },
    loginBtn:{
        marginTop: 20,
        width: '100%',
        backgroundColor: theme.colors.primary,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    loginBtnText: {
        fontWeight: '600',
        fontSize: 16,
        color: theme.colors.white,
    },
})