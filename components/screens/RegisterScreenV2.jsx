import { useNavigation, StackActions } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import auth from '@react-native-firebase/auth';
export default function RegisterScreen(){
    
    let navigation = useNavigation()
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    const register=()=>{
        auth()
        .createUserWithEmailAndPassword(username, password)
        .then(() => {
          console.log('User account created & signed in!');
          navigation.dispatch(
            StackActions.replace('LoginScreen')
          );
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
    }

    return <View style={{display : "flex", alignItems : "center", justifyContent : "center", width : "100%", height : "100%", padding : 2, backgroundColor : "black"}}>
    <Text style={{fontSize : 24}}>Registration</Text>

    <View style={{display : "flex", alignItems : "flex-start", justifyContent : "flex-start", width : "100%", marginTop :20}}>
        <Text style={{fontSize : 16}}>Username</Text>
        <TextInput placeholder="Username" style={{fontSize : 20, borderBottomWidth : 1, width : "100%"}} onChangeText={e=>setUsername(e)}/>
    </View>
    
    <View style={{display : "flex", alignItems : "flex-start", justifyContent : "flex-start", width : "100%", marginTop :20}}>
        <Text style={{fontSize : 16}}>Password</Text>
        <TextInput placeholder="Password" style={{fontSize : 20, borderBottomWidth : 1, width : "100%"}} secureTextEntry onChangeText={e=>setPassword(e)}/>
    </View>

    <View style={{display : "flex", alignItems : "flex-start", justifyContent : "flex-start", width : "100%", marginTop :20}}>
        <Text style={{fontSize : 16}}>Confirm Password</Text>
        <TextInput placeholder="Password" style={{fontSize : 20, borderBottomWidth : 1, width : "100%"}} secureTextEntry/>
    </View>

    <View style={{width : "100%", marginTop : 20}}>
        <Button onPress={()=>{register()}} title="Register"/>
    </View>

    <TouchableOpacity onPress={()=>{navigation.navigate("LoginScreen")}} style={{marginTop : 20}}>
        <Text>Already have an account? Login</Text>
    </TouchableOpacity>
</View>
}