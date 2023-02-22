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
    cardConatiner: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    card: {
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 10,
        width: '48%',
        height: 140,
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    registerBtn:{
        width: '48%',
        backgroundColor: theme.colors.white,
        height: 30,
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