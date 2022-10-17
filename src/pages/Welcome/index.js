
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

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={style.container}>

            <View style={style.containeLogo} >
                <Image 
                    source={require("../../assets/iconsem_fundo.png")}
                    style={style.imagem}
                    resizeMode="cover"    
                />
            </View>

            <View style={style.containerForm} >
                <Image source={require("../../assets/Piont.png")} style={style.icon_bola} />
                <Image source={require("../../assets/triangulo.png")} style={style.icon_triangulo} />

                <Text style={style.titulo} >
                    Login
                </Text>
                <Text style={style.textInput} >RM:</Text>
                <TextInput 
                    //placeholder="RM:"
                    style={style.input}
                />
                <Text style={style.textInput} >Senha:</Text>
                <TextInput 
                    //placeholder="SENHA:"
                    style={style.input}
                />
                <TouchableOpacity 
                style={style.botaoSenha}
                onPress={() => navigation.navigate("EsqueciSenha")}
                >
                    <Text style={style.botaoSenhaText}>
                        Esqueci a senha
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={style.botao}
                onPress={() => navigation.navigate("User")}
                >
                    <Text style={style.botaoText} >
                        ENTRAR
                    </Text>
                </TouchableOpacity>

                <Image source={require("../../assets/Pointrianglecube.png")} style={style.icontriangulocubo} />

            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5ffff",
    },
    imagem: {
        width: "100%",
        alignItems: "center",
        marginRight: "10%",
        marginTop: "-10%",
        marginBottom: -82
    },
    containeLogo: {
        // flex: 1,
        backgroundColor: "#f5ffff",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "8%",
        marginStart: "5%",
        paddingStart: "5%",
        marginTop: "14%",
    },
    containerForm: {
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
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 72,
        marginBottom: 40,
        color: "#29A6EC"
    },
    input: {
        borderWidth: 1.1,
        width: "89%",
        margin: 3,
        marginBottom: "5%",
        borderRadius: 10,
        height: 50,
        borderColor: "#275975"
    },
    textInput: {
        right: "39%",
        fontWeight: "bold",
        color: "#949494",
        fontSize: 17,
    },
    botao: {
        backgroundColor: "#0268AC",
        marginTop: "28%",
        width: 154,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    botaoText: {
        color: "#FFF",
        fontSize: 16,
    },
    botaoSenhaText: {
        color: "#2E58EC",
        fontSize: 16,
    },
    botaoSenha: {
        borderBottomWidth: 1,
        borderColor: "#2E58EC",
        marginTop: -10
    },
    icon_bola: {
        position: "absolute",
        right: 190,
        top: -15,
    },
    icon_triangulo: {
        position: "absolute",
        marginTop: 25,
        top: 25,
        left: 300
    },
    icontriangulocubo: {
        position: "absolute",
        top: 370,
        left: 280
    },
});