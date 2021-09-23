import { useRef, useState } from "react"

enum Operadores {
    suma, resta, multiplicar, dividir
}

export const UseCalculator = () => {



    const [numero, setNumero] = useState('0')
    const [before, setBefore] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const clean = () => {
        setNumero('0');
        setBefore('0');
    }

    const numberCreate = (numerText: string) => {

        // Si ya hay punto decimal 
        if (numero.includes('.') && numerText === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            
            // Si es el punto decimal
            if (numerText === '.') {
                setNumero(numero + numerText);

                // Evalua si hay otro cero cero o hay un punto
            } else if(numerText === '0' && numero.includes('.')) {
                setNumero(numero + numerText)

                // Evaluar si es diferente de cero y no tiene un punto
            }else if ( numerText != '0' && !numero.includes('.')){
                setNumero(numerText)

                // Evitar el 0000000.0
            }else if ( numerText === '0' && !numero.includes('.')){
                setNumero(numero)
            }else {
                setNumero(numero + numerText)
            }
        }else {
            setNumero(numero + numerText)
        }

    }

    const postiveNegative = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        }else {
            setNumero('-' + numero)
        }
    }

    const cambiarNumeroAnterior = () => {

        if (numero.endsWith('.')) {
            setBefore(numero.slice(0, -1));
        }else{
            setBefore(numero);
        }
        setNumero('0');
    }

    const btnDelete = () => {
        let negativo = '';
        let numTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numTemp = numero.substr(1);
        }

        if (numTemp.length>1) {
            setNumero(numTemp.slice(0, -1));

        }else {
            setNumero('0');
        }

    }

    const btnDividir = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnSumar = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.suma;
    }
    const btnResta = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.resta;
    }
    const btnMultiplicar = () => {
        cambiarNumeroAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const calc = () => {
        const num1 = Number(numero);
        const num2 = Number(before);

        switch (ultimaOperacion.current) {
            case Operadores.suma:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.resta:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`)
                break;
        }

        setBefore('0');
    }


    return {
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
    }
}
