import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";

export default function RegisterScreen(){
    
    let navigation = useNavigation()

    return <View style={{display : "flex", alignItems : "center", justifyContent : "center", width : "100%", height : "100%", padding : 20}}>
    <Text style={{fontSize : 24}}>Registration</Text>

    <View style={{display : "flex", alignItems : "flex-start", justifyContent : "flex-start", width : "100%", marginTop :20}}>
        <Text style={{fontSize : 16}}>Username</Text>
        <TextInput placeholder="Username" style={{fontSize : 20, borderBottomWidth : 1, width : "100%"}}/>
    </View>
    
    <View style={{display : "flex", alignItems : "flex-start", justifyContent : "flex-start", width : "100%", marginTop :20}}>
        <Text style={{fontSize : 16}}>Password</Text>
        <TextInput placeholder="Password" style={{fontSize : 20, borderBottomWidth : 1, width : "100%"}} secureTextEntry/>
    </View>

    <View style={{display : "flex", alignItems : "flex-start", justifyContent : "flex-start", width : "100%", marginTop :20}}>
        <Text style={{fontSize : 16}}>Confirm Password</Text>
        <TextInput placeholder="Password" style={{fontSize : 20, borderBottomWidth : 1, width : "100%"}} secureTextEntry/>
    </View>

    <View style={{width : "100%", marginTop : 20}}>
        <Button title="Register"/>
    </View>

    <TouchableOpacity onPress={()=>{navigation.navigate("LoginScreen")}} style={{marginTop : 20}}>
        <Text>Already have an account? Login</Text>
    </TouchableOpacity>
</View>
}