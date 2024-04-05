import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Button, TextInput, Alert } from "react-native";
import UserModel from "../../models/UserModel";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen(){
    
    let [username, setUsername] = useState("kminchelle")
    let [password, setPassword] = useState("0lelplR")

    let navigation = useNavigation()

    const handleLogin=async()=>{
        try{
            let result = await UserModel.login(username, password)
            console.log(result)
            AsyncStorage.setItem('token', result.token)
            navigation.navigate("MainTab")
        }catch(e){
            if(e.message){
                Alert.alert("An Error Occured", e.message)
            }else{
                Alert.alert("An Error Occured", "Please try again later")
            }
            console.error(e)
        }

    }

    return <View style={{display : "flex", alignItems : "center", justifyContent : "center", width : "100%", height : "100%", padding : 20}}>
        <Text style={{fontSize : 24}}>My App</Text>

        <View style={{display : "flex", alignItems : "flex-start", justifyContent : "flex-start", width : "100%", marginTop :20}}>
            <Text style={{fontSize : 16}}>Username</Text>
            <TextInput value={username} onChangeText={(value)=>{console.log(value);setUsername(value)}} placeholder="Username" style={{fontSize : 20, borderBottomWidth : 1, width : "100%"}}/>
        </View>
        
        <View style={{display : "flex", alignItems : "flex-start", justifyContent : "flex-start", width : "100%", marginTop :20}}>
            <Text style={{fontSize : 16}}>Password</Text>
            <TextInput value={password} onChangeText={(value)=>{setPassword(value)}} placeholder="Password" style={{fontSize : 20, borderBottomWidth : 1, width : "100%"}} secureTextEntry/>
        </View>

        <View style={{width : "100%", marginTop : 20}}>
            <Button onPress={()=>{handleLogin()}} title="Login"/>
        </View>

        <TouchableOpacity onPress={()=>{navigation.navigate("RegisterScreen")}} style={{marginTop : 20}}>
            <Text>Don't have an account yet? Register here</Text>
        </TouchableOpacity>
    </View>
}