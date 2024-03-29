import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome/index";
import EsqueciSenha from "../pages/Welcome/index1"
import User from "../pages/User/home";
import QrCode from "../pages/User/qrcode";
import Perfil from "../pages/User/perfil";
import Diario from "../pages/User/diario";

import {Provider} from "../components/context/authContext"
import {SafeAreaProvider} from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Routes = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
        
            <Stack.Screen 
                name="EsqueciSenha"
                component={EsqueciSenha}
                options={{ headerShown: false }}
            />

            <Stack.Screen 
                name="User"
                component={User}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="QrCode"
                component={QrCode}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Perfil"
                component={Perfil}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Diario"
                component={Diario}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default ()=>{
    return(
        <Provider>
            <SafeAreaProvider>
                <Routes />
            </SafeAreaProvider>
        </Provider>
    );
};