import { View , Text} from "react-native";

import {useState} from 'react';

import LangPicker from "./Picker";



function Login() {

    return(
        <>
        <View style= {{marginTop: 50, marginLeft: 10}}>
        <Text style= {{fontWeight: "bold",fontSize:25,marginBottom:10}}>Enter your phone number</Text>
        <Text>KeurDeret will need to verify your Phone number {'\n'} before  you can proceed</Text>
        </View>
        <View>
            <LangPicker />
            

        </View>
        </>
    
    )
}
export default Login;