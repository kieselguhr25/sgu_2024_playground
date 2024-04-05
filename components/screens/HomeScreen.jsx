import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen(){
    
    let navigation = useNavigation()

    return <View style={{display : "flex", alignItems : "center", justifyContent : "center", width : "100%", height : "100%"}}>
        <Text style={{fontSize : 40}}>Welcome Home</Text>
    </View>
}