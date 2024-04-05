import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, Alert, Image, Button } from "react-native";
import UserModel from "../../models/UserModel";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen() {

    let navigation = useNavigation()
    let [userData, setUserData] = useState(null)

    const logout=()=>{
        AsyncStorage.removeItem('token')
        navigation.navigate("LoginScreen")
    }

    const getProfile = async()=>{
        try{
            let userData = await UserModel.getUserData()
            console.log(userData.image)
            setUserData(userData)
        }catch(e){
            if(e.message){
                Alert.alert("An Error Occured", e.message)
            }else{
                Alert.alert("An Error Occured", "Please try again later")
            }
            console.error(e)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return <View style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", flexDirection : "column" }}>
        {
            userData ? <>
                <Image 
                    style={{height : 200, width : 200, borderRadius : 100}}
                    source={{uri : userData.image}}/>
                {/* <Image source={{uri : userData.image}}/> */}
                <Text style={{ fontSize: 25 }}>{userData.firstName} {userData.lastName}</Text>
                <View style={{display : "flex", flexDirection : "row", width : "80%"}}>
                    <Text style={{ fontSize: 20, flex:  1}}>Email</Text>
                    <Text style={{ fontSize: 20}}>{userData.email}</Text>
                </View>
                <View style={{display : "flex", flexDirection : "row", width : "80%"}}>
                    <Text style={{ fontSize: 20, flex:  1}}>Phone Number</Text>
                    <Text style={{ fontSize: 20}}>{userData.phone}</Text>
                </View>
                <Button onPress={()=>logout()} title="Logout"></Button>
            </> : <Text>Loading...</Text>
        }
    </View>
}