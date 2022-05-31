import * as React from 'react';
import {useState} from 'react';
import {Animated, Text, View} from 'react-native';
import Botao from "../Botao";
import {tamanhos} from "../tamanhos";
import Estilo from "../Estilo";


const Ajuda = ({navigation, route}) => {
    const [fonte] = useState(new Animated.Value(tamanhos.pequeno));
    Animated.spring(fonte, {
        toValue: tamanhos.grande,
        speed: 10,
        bounciness: 30,
    }).start();

    return (

        <View>

            <Animated.Text style={[Estilo.text, {fontSize: fonte}]}> Quer descobrir como multiplicar seu dinheiro?</Animated.Text>

            <Text style={[Estilo.text, {fontSize: 14}]}>O melhor banco digital voltado para as criptomoedas</Text>

            <Text style={[Estilo.text, {fontSize: 14}]}>
                24h/por dia
            </Text>

            <Text style={[Estilo.text, {fontSize: 12}]}>
                INSTAGRAM: @criptoNIN77.
            </Text>

            <Botao
                color="#698B22"
                title="Inicio"
                action={() => navigation.goBack()}
            />
        </View>
    );
}

export default Ajuda;

