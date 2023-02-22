import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    navLogo: {
        height: 40,
        width: 40,
    },
    sideLogo: {
        height: 35,
        width: 35,
    },
    peofileDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 6,
    },
    profileTxt: {
        color: '#000000',
        marginHorizontal: 2,
        fontSize: 14,
        fontWeight: '600',
    }
})