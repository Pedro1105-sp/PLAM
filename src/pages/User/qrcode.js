import React, { Component } from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from "react-native";
import {QRCode, Canvas} from 'easyqrcode-react-native';
import { useNavigation } from "@react-navigation/native";

export default class QrCode extends Component{
    // navigation = useNavigation();
        // 3. Generate QRCode
        generateQRCode = (canvas) => {
            if (canvas !== null){
                // QRCode options
                var options = {
                    text: "210001",
                };
                // Create QRCode Object
                var qrCode = new QRCode(canvas, options);
            }
        }
        
    render() { 
        return (
        <View style={style.container}>
            <View style={style.imagemPerfil}>
                <Image source={require("../../assets/fotoPerfil.png")} style={style.fotoPerfil} resizeMode="center" />
                <Text style={style.textAlunoNome}>NOM DO ALUNO</Text>
            </View>

            <View style={style.containerQrCode}>
                {/* 2. QRCode Canvas  */}
                <Canvas ref={this.generateQRCode}/>
            </View>

            <View style={style.textAproximacao}>
                <Text style={style.textAproximacaoStyle1}>Aproxime o QrCode no leitor</Text>
                <Text style={style.textAproximacaoStyle2}>aproximadamente 10 cm de distância</Text>
            </View>

            <View style={style.containerHome}>
                    <View style={style.agrupo}>
                        <TouchableOpacity style={style.home} onPress={() => {this.props.navigation.navigate("User")}}><Image source={require("../../assets/home.png")} /></TouchableOpacity>
                        <TouchableOpacity onPress={() =>{this.props.navigation.navigate("QrCode")}}><Image source={require("../../assets/qrcode.png")} /></TouchableOpacity>
<<<<<<< HEAD
                        <TouchableOpacity style={style.perfil} onPress={() => {this.props.navigation.navigate("Perfil")}}><Image source={require("../../assets/perfil.png")} /></TouchableOpacity>
=======
                        <TouchableOpacity style={style.perfil} onPress={() => {this.props.navigation.navigate("QrCode")}}><Image source={require("../../assets/perfil.png")} /></TouchableOpacity>
>>>>>>> f01f473e2e102adbf1d666f2dd34cc6d1b690ba0
                </View>
            </View>

        </View>
        );
    }
};
  //  export default QrCode;

 const style = StyleSheet.create({
    container:{
        backgroundColor: "#f5ffff",
    },
    fotoPerfil:{
        width: "100%",
<<<<<<< HEAD
        bottom: "20%"
    },
    textAlunoNome:{
        bottom: "48%",
=======
        bottom: "24%"
    },
    textAlunoNome:{
        bottom: "53%",
>>>>>>> f01f473e2e102adbf1d666f2dd34cc6d1b690ba0
        justifyContent: "center",
        alignItems: "center",
        left: "35%",
    },
    containerQrCode:{
        backgroundColor: "#FFF",
        width: "65%",
        height: "28%",
<<<<<<< HEAD
        bottom: "27%",
=======
        bottom: "31%",
>>>>>>> f01f473e2e102adbf1d666f2dd34cc6d1b690ba0
        left: "17%",
        justifyContent: "center",
        alignItems: "center"
    },
    textAproximacao:{
<<<<<<< HEAD
        bottom: "25%"
=======
        bottom: "29%"
>>>>>>> f01f473e2e102adbf1d666f2dd34cc6d1b690ba0
    },
    containerHome:{
        backgroundColor: "#FFF",
        width: "90%",
        height: "10%",
        borderRadius: 35,
        marginStart: "5%",
<<<<<<< HEAD
        bottom: "14.4%"
=======
        bottom: "20.4%"
>>>>>>> f01f473e2e102adbf1d666f2dd34cc6d1b690ba0
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
    textAproximacaoStyle1:{
        left: "27%",
        fontSize: 16
    },
    textAproximacaoStyle2:{
        left: "15%",
        fontSize: 16
    },
})