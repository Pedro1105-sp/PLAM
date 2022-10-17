import React from "react";
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    ART
 } from "react-native";
 import Pie from 'react-native-pie'
 import { useNavigation } from "@react-navigation/native";
 import {Surface, Shape} from '@react-native-community/art';

//  const Data =[
//     {percentage: 65, color: "#FFFF"},
//  ]

 export default function Diario(){
    const navigation = useNavigation();

    return(
        <View style={style.container}>
            <View style={style.containerLogo}>
            </View>
            {/* <Pie
              radius={80}
              sections={[
                {
                  percentage: 10,
                  color: '#C70039',
                },
                {
                  percentage: 20,
                  color: '#44CD40',
                },
                {
                  percentage: 30,
                  color: '#404FCD',
                },
                {
                  percentage: 40,
                  color: '#EBD22F',
                },
              ]}
              strokeCap={'butt'}
            /> */}
        </View>
    )
 }

 const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#132a6e"
    }
 })