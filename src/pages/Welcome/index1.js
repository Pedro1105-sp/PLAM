import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
 } from "react-native";

 import { useNavigation } from "@react-navigation/native";

 export default function EsqueciSenha() {
    const navigation = useNavigation();
    
    return (
        <View style={style.container}>

            <View style={style.containeSeguranca} >
                <TouchableOpacity 
                style={style.botaoVoltar}
                onPress={() => navigation.navigate("Welcome")}
                >
                    <Image source={require("../../assets/voltar.png")} />
                    <Text>Voltar</Text>
                </TouchableOpacity>
                
            </View>

            <View style={style.containetForm}>
            <Image source={require("../../assets/Seguranca.png")} style={style.imagemSeguranca} />
            <Image source={require("../../assets/triangulo.png")} style={style.icon_triangulo} />
                <Text style={style.titulo}>Verificação de segurança</Text>
                <Text style={style.subtitulo1}>Enviamos um código de 4 dígitos</Text>
                <Text style={style.subtitulo2}>para o seu número de telefone</Text>
                <Text style={style.subtitulo3}>Por favor, digite o código abaixo</Text>

                <View style={style.campoInput}>
                    <TextInput style={style.inputCod1}/>
                    <TextInput style={style.inputCod2}/>
                    <TextInput style={style.inputCod3}/>
                    <TextInput style={style.inputCod4}/>
                </View>
                <Image source={require("../../assets/Piont.png")} style={style.icon_bola} />
                <Text style={style.text}>Não recebeu seu código?</Text>
                <TouchableOpacity style={style.botaoReenviar}>
                    <Text style={style.textReenviar}>Reenviar o código</Text>
                </TouchableOpacity>
                <Image source={require("../../assets/Pointrianglecube.png")} style={style.icontriangulocubo} />
            </View>

        </View>
    );
 }

 const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f5ffff",
    },
    containeSeguranca: {
       // flex: 0.2,
        backgroundColor: "#f5ffff",
    },
    botaoVoltar: {
        marginTop: 60,
        marginLeft: 20,
        marginBottom: 60
    },
    imagemSeguranca: {
        marginTop: -60,
    },
    containetForm: {
        flex: 1,
        backgroundColor: "#FFF",
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        paddingStart: "5%",
        paddingEnd: "5%",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#bbbdbd"
    },
    titulo: {
        fontWeight: "bold",
        color: "#29A6EC",
        fontSize: 19,
        marginTop: 40
    },
    subtitulo1: {
        fontWeight: "bold",
        fontSize: 23,
        marginTop: 15
    },
    subtitulo2: {
        fontWeight: "bold",
        fontSize: 23,
    },
    subtitulo3: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#949494",
        marginTop: 20
    },
    campoInput: {
        marginTop: 35,
        flexDirection: "row",
    },
    inputCod1: {
        borderWidth: 1,
        width: 61,
        height: 80,
        marginRight: 10,
        borderRadius: 10,
        borderColor: "#275975",
    },
    inputCod2: {
        borderWidth: 1,
        width: 61,
        height: 80,
        marginRight: 10,
        borderRadius: 10,
        borderColor: "#275975",
    },
    inputCod3: {
        borderWidth: 1,
        width: 61,
        height: 80,
        marginRight: 10,
        borderRadius: 10,
        borderColor: "#275975",
    },
    inputCod4: {
        borderWidth: 1,
        width: 61,
        height: 80,
        marginRight: 10,
        borderRadius: 10,
        borderColor: "#275975",
    },
    text: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#949494",
        marginTop: 120,
    },
    botaoReenviar: {
        marginTop: 8,
    },
    textReenviar: {
        color: "#29A6EC",
        fontWeight: "bold",
        fontSize: 15,
    },
    icon_triangulo: {
        position: "absolute",
        marginTop: 25,
        top: 2,
        left: 300
    },
    icontriangulocubo: {
        position: "absolute",
        top: 460,
        left: 280
    },
    icon_bola: {
        position: "absolute",
        right: 210,
        top: 327,
    },
 });