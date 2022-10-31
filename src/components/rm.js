import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const RmInput = ({ value, setValue}) => {
    return(
        <TextInput
            style={style.textInput}
        />
    )
};

const style = StyleSheet.create({
    textInput: {
        marginBottom: 10,
    }
});

export default RmInput;