import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import messaging from '@react-native-firebase/messaging';

import { PermissionsAndroid } from 'react-native';

export default function LoginScreen() {

    let navigation = useNavigation()

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function logout() {
        auth().signOut().then(() => { console.log("Logout Success") })
    }

    function handleLogin() {
        auth().signInWithEmailAndPassword(username, password).then(() => { console.log("Logout Success") })
    }

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    async function setupPushNotification () {
        try{
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log(fcmToken);
            }
        }catch(e){
            console.error(e)
        }

    }

    useEffect(() => {

        setupPushNotification()
        
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    // if (!user) {
    //     return (
    //         <View>
    //             <Text>Login</Text>
    //         </View>
    //     );
    // }

    return <>
        {
            user ?
                <View style={{ backgroundColor: "black", height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Text>Welcome {user.email}</Text>
                    <Button title="Logout" onPress={() => { logout() }}></Button>
                </View>
                :
                <View style={{ backgroundColor: "black", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ backgroundColor: "black", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", width: "100%", marginTop: 20 }}>
                        <Text style={{ fontSize: 16 }}>Username</Text>
                        <TextInput value={username} onChangeText={(value) => { console.log(value); setUsername(value) }} placeholder="Username" style={{ fontSize: 20, borderBottomWidth: 1, width: "100%" }} />
                    </View>

                    <View style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start", width: "100%", marginTop: 20 }}>
                        <Text style={{ fontSize: 16 }}>Password</Text>
                        <TextInput value={password} onChangeText={(value) => { setPassword(value) }} placeholder="Password" style={{ fontSize: 20, borderBottomWidth: 1, width: "100%" }} secureTextEntry />
                    </View>

                    <View style={{ width: "100%", marginTop: 20 }}>
                        <Button onPress={() => { handleLogin() }} title="Login" />
                    </View>

                    <TouchableOpacity onPress={() => { navigation.navigate("RegisterScreen") }} style={{ marginTop: 20 }}>
                        <Text>Don't have an account yet? Register here</Text>
                    </TouchableOpacity>
                </View>

        }

    </>
}