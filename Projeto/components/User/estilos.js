import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: 50, 
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    headerText: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 20, 
        fontWeight: 'bold',
    },
    userIcon: {
        width: 60, 
        height: 60, 
        borderRadius: 30,
    },
    logoutButtonIcon: {
        color: '#fff',
        fontSize: 24, 
    },
});
