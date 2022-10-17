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

 export default function Perfil(){
    const navigation = useNavigation();

    return(
        <View style={style.container}>
            <View style={style.imagemPerfil}>
                <Image source={require("../../assets/fotoPerfil.png")} style={style.fotoPerfil} resizeMode="center" />
            </View>

            <View style={style.containerInformacoes}>

                <View style={style.informacoes}>
                    <View style={style.inforNome}>
                        <Text>Nome:</Text>
                        <Text>Nome do Aluno</Text>
                    </View>

                    <View style={style.escolaeRm}>
                        <View style={style.rm}>
                            <Text>RM:</Text>
                            <Text>12345678</Text>
                        </View>

                        <View style={style.escola}>
                            <Text>Instituição</Text>
                            <Text>Etec Antônio Furlan</Text>
                        </View>
                    </View>

                    <View style={style.curso}>
                        <Text>Curso:</Text>
                        <Text>Desenvolvimento de Sistemas</Text>
                    </View>

                    <View style={style.turmaePeriodo}>
                        <View style={style.turma}>
                            <Text>Turma:</Text>
                            <Text>2º Modulo</Text>
                        </View>

                        <View style={style.periodo}>
                            <Text>Período</Text>
                            <Text>Noturno</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={style.botaoSair}>
                    <Text style={style.textBotaoSair}>Sair</Text>
                </TouchableOpacity>

                <View style={style.containerHome}>
                    <View style={style.agrupo}>
                        <TouchableOpacity style={style.home} onPress={() => navigation.navigate("User")}><Image source={require("../../assets/home.png")} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("QrCode")}><Image source={require("../../assets/qrcode.png")} /></TouchableOpacity>
                        <TouchableOpacity style={style.perfil} onPress={() => navigation.navigate("Perfil")}><Image source={require("../../assets/perfil.png")} /></TouchableOpacity>
                </View>
            </View>

            </View>

        </View>
    )
 }

 const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#4E669F"
    },
    fotoPerfil:{
        width: "100%",
        alignItems: "center",
        marginRight: "10%",
        marginTop: "-25%",
        marginBottom: -138
    },
    containerInformacoes:{
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
    informacoes:{
        justifyContent: "center",
        flexDirection: "column"
    },
    inforNome:{
        flexDirection: "column",
        right: "20%",
        top: "15%"
    },
    escolaeRm:{
        flexDirection: "row",
        right: "46%",
        top: "15%"
    },
    escola:{
        left: "370%"
    },
    curso:{
        flexDirection: "column",
        right: "20%",
        top: "45%"
    },
    turmaePeriodo:{
        flexDirection: "row",
        right: "46%",
        top: "25%"
    },
    periodo:{
        left: "370%"
    },
    botaoSair:{
        top: "35%",
        justifyContent: "center",
        width: "40%",
        height: "10%",
        backgroundColor: "#0268AC",
        borderRadius: 10,
        alignItems: "center"
    },
    containerHome:{
        backgroundColor: "#FFF",
        width: "99%",
        height: "16%",
        borderRadius: 35,
        top: "41%"
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
    textBotaoSair:{
        fontWeight: "bold",
        color: "#D9D9D9",
        fontSize: 20,
        borderRadius: 10,
        marginTop: 5,
        alignItems: "center"
    }
 })