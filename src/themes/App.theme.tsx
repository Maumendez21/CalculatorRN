import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo :{
        flex: 1,
        backgroundColor: 'black',
    },
    
    calcContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20

    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10

    },
    smallResult: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    file: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    boton: {
        height: 80,
        width: 80,
        backgroundColor: "#2D2D2D",
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 35,
        color: 'white',
        fontWeight: '600',
    }
})