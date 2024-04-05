import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ApiRequest {
  static set = async (endpoint, method, body) => {

    let token = await AsyncStorage.getItem('token');
    console.log("TOKEN", token)
    let request = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: !!token ? `Bearer ${token}` : null,
        Accept: 'application/json',
      },
      body: JSON.stringify(body)
    };

    let baseURL = "https://dummyjson.com" 

    console.log(`API ACCESS [${method}]: ` + baseURL + endpoint);

    let response = await fetch( baseURL + endpoint, request);

    if (response.ok) {
      return await response.json();
    }else{
    }

    let error = await response.json();
    throw error;
  }
}