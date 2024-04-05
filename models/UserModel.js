import ApiRequest from "../utils/APIRequest"

export default class UserModel {

    static login = async function (username, password){
        return await ApiRequest.set("/auth/login", "POST", {username, password, expiresInMins : 60})
    }

    static getUserData = async function (){
        return await ApiRequest.set("/auth/me", "GET")
    }

}