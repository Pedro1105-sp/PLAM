import createContext from "./createContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../../API";

const initialState = {}

const reducer = (state, action) =>{
    switch(action.type) {
        default: 
            return state;
    };
};

const teste = (dispatch) =>{
    return (args)=>{
        console.log(args);
    };
};

const loginUser = (dispatch) =>{
    return async (rm, senha) =>{
        try{
           const data = await api.post("/login", {
                rm,
                senha
            });

            // await AsyncStorage.setItem("token", data.data.token);

            // if (response && response.data && response.data.token) {
            //     await AsyncStorage.setItem('token', response.data.token);
            // }
            //const token = await AsyncStorage.getItem("token");
            console.log(data);
        } catch (error){
            console.log(error);
           // return error.response.data;
        }
    }
}

export const {Context, Provider} = createContext(
    reducer, 
    {teste, loginUser}, 
    initialState
);