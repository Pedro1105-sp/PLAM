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

export default function User() {
    const navigation = useNavigation();

    return (
        <View style={style.container}>

            <View style={style.Entrada}>
                <Text style={style.textEntrada}>
                    Bem-vindo(a) 
                </Text>
                <Image source={require("../../assets/logoSemLetras.png")} style={style.logoSemLetras} />
            </View>

            <View style={style.containerDiario}>
                <Text style={style.textInicial1}>Dê uma olhada na</Text>
                <Text style={style.textInicial2}>sua frequência!</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Diario")}><Text style={style.textDiario}>Diário</Text></TouchableOpacity>
            </View>
            
            <View style={style.grafico}>
                <Image source={require("../../assets/grafico.png")} style={style.grafico} />
            </View>
            
            <View style={style.containerHome}>
                    <View style={style.agrupo}>
                        <TouchableOpacity style={style.home} onPress={() => navigation.navigate("User")}><Image source={require("../../assets/home.png")} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("QrCode")}><Image source={require("../../assets/qrcode.png")} /></TouchableOpacity>
                        <TouchableOpacity style={style.perfil} onPress={() => navigation.navigate("Perfil")}><Image source={require("../../assets/perfil.png")} /></TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5ffff",
    },
    Entrada: {
        paddingLeft: "5%"
    },
    logoSemLetras: {
        marginLeft: "58%",
        top: "-30%"
    },
    textEntrada: {
        marginTop: "30%",
        fontWeight: "bold",
        fontSize: 37,
        color: "#29A6EC"
    },
    containerDiario: {
        flex: 0.80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 13,
        borderColor: "#A6A6A6",
        bottom: "5%"
    },
    textInicial1: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#949494",
        marginBottom: 2
    },
    textInicial2: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#949494",
        marginBottom: 7
    },
    textDiario: {
        fontWeight: "bold",
        color: "#FFF",
        backgroundColor: "#00A3FF",
        width: 300,
        height: 55,
        paddingStart: "30%",
        paddingTop: "2.5%",
        fontSize: 25,
        borderRadius: 10,
        marginTop: 5,
        alignItems: "center"
    },
    containerHome:{
        backgroundColor: "#FFF",
        width: "90%",
        height: "10%",
        top: "1.5%",
        borderRadius: 35,
        marginStart: "5%"
    },
    agrupo:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    home:{
        right: "100%"
    },
    perfil:{
        left: "100%"
    },
    grafico:{
       marginLeft: "1%",
       marginBottom: "2%"
       
    }
});