import * as React from 'react';
import {useState} from 'react';
import {Animated, View} from 'react-native';
import Botao from "../Botao";
import Estilo from "../Estilo";
import {tamanhos} from "../tamanhos";


const Home = ({navigation}) => {

    const [fonte] = useState(new Animated.Value(tamanhos.pequeno));
    const [altura] = useState(new Animated.Value(22));
    const [largura] = useState(new Animated.Value(22));

    Animated.timing(largura, {
        toValue: tamanhos.largura,
        duration: 6000,
    }).start();

    Animated.timing(altura, {
        toValue: tamanhos.altura,
        duration: 6000,
    }).start();

    Animated.spring(fonte, {
        toValue: tamanhos.grande,
        speed: 6,
        bounciness: 26,
    }).start();

    return (

        <View>
            <Animated.Text style={[Estilo.text, {fontSize: fonte}]}> Welcome to criptoNIN! </Animated.Text>
            <Animated.Image source={require("../../../assets/cripto.jpg")}
                            style={{alignSelf: 'center', width: largura, height: altura, backgroundColor: '#E9967A'}}
            />

            <Botao
                color="#A2CD5A"
                title="HELP"
                action={() => navigation.navigate("Ajuda")}

            />
        </View>
    );
}

export default Home;

