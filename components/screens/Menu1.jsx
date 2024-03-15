import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function Menu1(){
    
    let navigation = useNavigation()

    return <View>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Menu2")
        }}>
            <Text>Go TO NEXT PAGE</Text>
        </TouchableOpacity>
    </View>
}