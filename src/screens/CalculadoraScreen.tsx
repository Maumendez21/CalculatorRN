import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/App.theme'
import { ButtonCalcc } from '../components/ButtonCalcc';
import { UseCalculator } from '../Hooks/UseCalculator';

export const CalculadoraScreen = () => {

    const {
        before,
        numero,
        clean,
        postiveNegative,
        btnDelete,
        btnDividir,
        numberCreate,
        btnMultiplicar,
        btnResta,
        btnSumar,
        calc
    } = UseCalculator();

    return (
        <View style={styles.calcContainer}>
            {
                (before !== '0') && (
                    <Text style={styles.smallResult}>{before}</Text>
                )
            }

            <Text 
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>
            <View style={styles.file} >
                <ButtonCalcc text="C"   color="#9B9B9B" action={clean}/>
                <ButtonCalcc text="+/-" color="#9B9B9B" action={postiveNegative}/>
                <ButtonCalcc text="del" color="#9B9B9B" action={btnDelete}/>
                <ButtonCalcc text="/"   color="#ff9427" action={btnDividir}/>
            </View>
            <View style={styles.file} >
                {/* boton */}
                <ButtonCalcc text="7" action={numberCreate}    />
                <ButtonCalcc text="8" action={numberCreate}  />
                <ButtonCalcc text="9" action={numberCreate}  />
                <ButtonCalcc text="x"   color="#ff9427" action={btnMultiplicar} />
            </View>
            <View style={styles.file} >
                {/* boton */}
                <ButtonCalcc text="4"  action={numberCreate}   />
                <ButtonCalcc text="5" action={numberCreate}  />
                <ButtonCalcc text="6" action={numberCreate}  />
                <ButtonCalcc text="-"   color="#ff9427" action={btnResta} />
            </View>
            <View style={styles.file} >
                {/* boton */}
                <ButtonCalcc text="1" action={numberCreate}    />
                <ButtonCalcc text="2"  action={numberCreate} />
                <ButtonCalcc text="3"  action={numberCreate} />
                <ButtonCalcc text="+"   color="#ff9427" action={btnSumar} />
            </View>
            <View style={styles.file} >
                {/* boton */}
                <ButtonCalcc text="0" action={numberCreate} ancho/>
                <ButtonCalcc text="." action={numberCreate} />
                <ButtonCalcc text="=" color="#ff9427" action={calc} />
            </View>
        </View>
    )
}
