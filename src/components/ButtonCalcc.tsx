import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../themes/App.theme';

interface props {
    text: string;
    color?: string;
    ancho?: boolean;
    action: ( number: string ) => void;
    // position?: 'br' | 'bl';
    // onPress: () => void; 
}

export const ButtonCalcc = ({text, color = "#2D2D2D",  ancho = false, action}: props) => {

    


    return (
        <TouchableOpacity 
            onPress={ () => action(text)}
        >
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho)? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonText,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
