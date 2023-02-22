import { StyleSheet } from "react-native";
import { theme } from "../../theming";

export const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1
    },
    image: {
        flex: 1,
    },
    logo: {
        height: 174,
        width: 182,
        marginBottom: 20
    },
    loginBox: {
        backgroundColor: '#fff',
        // height: '70%', 
        marginHorizontal: 16, 
        borderRadius: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40
    },
    errView:{
        alignItems: 'center',
        backgroundColor: '#f8d7da',
        borderWidth: 1,
        borderColor: '#f8d7da',
        borderRadius: 4,
        width: '100%',
        justifyContent: 'space-between',
        textAlign: 'left',
        flexDirection: 'row',
        padding: 8,
        marginBottom: 10
    },
    textInput: {
        alignItems: 'center',
        height: 45,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        marginTop: 10,
    },
    textInputText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#131e22'
    },
    forgotPass: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 14,
        marginBottom: 30,
    },
    loginBtn:{
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
        fontWeight: '400',
        fontSize: 20,
        color: theme.colors.white,
    },
    orText: {
        paddingVertical: 10,
    },
    registerBtn:{
        width: '100%',
        backgroundColor: theme.colors.white,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.primary,
    },
    registerBtnText: {
        fontWeight: '400',
        fontSize: 16,
        color: theme.colors.primary,
    },
})