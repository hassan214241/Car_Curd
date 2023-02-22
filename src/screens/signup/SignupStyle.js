import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../theming";
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    logo: {
        height: 174,
        width: 182,
        marginBottom: 20
    },
    emailSendView:{
        alignItems: 'center',
        backgroundColor: 'rgba(171, 235, 188, 0.5)',
        borderWidth: 1,
        borderColor: 'rgba(171, 235, 188, 0.5)',
        borderRadius: 4,
        width: '100%',
        justifyContent: 'space-between',
        textAlign: 'left',
        flexDirection: 'row',
        padding: 8,
        marginBottom: 10
    },
    loginBox: {
        backgroundColor: '#fff',
        marginHorizontal: 16, 
        borderRadius: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        marginTop: windowHeight > 770 ? 0 : 50,
        marginBottom: 20,
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
    forgotPass: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 10,
        marginBottom: 30,
    },
    loginBtn:{
        width: '100%',
        backgroundColor: theme.colors.white,
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
        color: theme.colors.primary,
    },
    orText: {
        paddingVertical: 10,
    },
    registerBtn:{
        width: '100%',
        backgroundColor: theme.colors.primary,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.primary,
        marginTop: 12
    },
    registerBtnText: {
        fontWeight: '400',
        fontSize: 20,
        color: theme.colors.white,
    },
})