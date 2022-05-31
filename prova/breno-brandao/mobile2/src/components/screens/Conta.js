import * as React from 'react';
import {useState} from 'react';
import {Animated, Switch, Text, TouchableOpacity, View} from 'react-native';
import Estilo from "../Estilo";
import Input from "../Input";
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import {tamanhos} from "../tamanhos";


const Conta = () => {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(null);
    const [genero, setGenero] = useState("Masculino");
    const [switchAtivado, setSwitchAtivado] = useState(false);
    const [limite, setLimite] = useState(0);

    const AtivarSwitch = () => setSwitchAtivado(previousState => !previousState);

    const Cadastrar = () => {

        let estudante;
        if (!switchAtivado) {
            estudante = "Não"
        } else {
            estudante = "Sim"
        }

        if (nome === "" || idade === null || limite === 0) {

            alert("Preencha todos os dados")

        } else {
            alert("Nome: " + nome + '\n' +
                "Idade: " + idade + '\n' +
                "Genero: " + genero + '\n' +
                "Conta de estudante: " + estudante + '\n' +
                "Limite: " + limite.toFixed(2) + '\n'
            )
        }

    }

    const Resetar = () => {

        setNome("");
        setIdade(null);
        setLimite(0);
        setGenero("Masculino");
        setSwitchAtivado(false);

    }

    const [fonte] = useState(new Animated.Value(tamanhos.pequeno));
    Animated.spring(fonte, {
        toValue: tamanhos.grande,
        speed: 10,
        bounciness: 30,
    }).start();


    return (
        <View>
            <Animated.Text style={[Estilo.text, {fontSize: fonte}]}>Dados do usuario</Animated.Text>


            <Text style={Estilo.label}>Nome:</Text>
            <Input
                onChangeText={setNome}
                value={nome}
                placeholder="Nome completo"

            />
            <Text style={Estilo.label}>Idade:</Text>
            <Input
                onChangeText={setIdade}
                value={idade}
                placeholder="Data de nascimento"

            />
            <Text style={Estilo.label}>Genero:</Text>
            <Picker
                style={Estilo.input}
                Genero={genero}
                onValueChange={(itemValue) => setGenero(itemValue)
                }>
                <Picker.Item label="Masculino" value="Masculino"/>
                <Picker.Item label="Feminino" value="Feminino"/>
            </Picker>

            <Text style={Estilo.label}>Limite: {limite.toFixed(2)}</Text>
            <Slider
                style={Estilo.slider}
                minimumValue={0}
                maximumValue={10000000}
                value={limite}
                onValueChange={setLimite}
                minimumTrackTintColor="#A9A9A9"
                maximumTrackTintColor="#8B7E66"
            />

            <Text style={Estilo.label}>Estudante:</Text>
            <Switch
                style={Estilo.switch}
                trackColor={{false: Estilo.switch.false, true: Estilo.switch.true}}
                thumbColor={switchAtivado ? Estilo.switch.ativado : Estilo.switch.desativado}
                ios_backgroundColor="#A9A9A9"
                onValueChange={AtivarSwitch}
                value={switchAtivado}
            />

            <TouchableOpacity
                style={Estilo.touch}
                onPress={Cadastrar}
            >
                <Text style={[Estilo.label, {marginLeft: "10px"}]}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[Estilo.touch, {backgroundColor: "#008B8B"}]}
                onPress={Resetar}
            >
                <Text style={[Estilo.label, {marginLeft: "10px"}]}>Resetar</Text>
            </TouchableOpacity>
        </View>

    );

}

export default Conta;