import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WelcomeScreen(){
    
    let navigation = useNavigation()

    let evaluateToken=async()=>{
        let token = await AsyncStorage.getItem('token')
        console.log("token", token, !!token)
        if(token){
            navigation.navigate("MainTab")
        }else{
            navigation.navigate("LoginScreen")
        }
        
    }

    useEffect(()=>{
        setTimeout(()=>{
            evaluateToken()
        }, 3000)
    },[3000])

    return <View style={{display : "flex", alignItems : "center", justifyContent : "center", width : "100%", height : "100%"}}>
        <Text style={{fontSize : 40}}>Welcome</Text>
    </View>
}