import Constants from "./../Constants";
import { fetchGet, fetchPost, fetchPut, fetchDelete } from "./Utilities";
const BASE_API_URL = "http://localhost:3000/api/";
class UserServices {
  
    static getAll() {
        return fetchGet(BASE_API_URL+"getAll");
    }

    static postUser(data){
        console.log(data)
      return fetchPost(`${BASE_API_URL}post`,data)
    }

    // static updateUser(){
    //     return fetchPut()
    // }

    static deleteUser(userId){
        return fetchDelete(`${BASE_API_URL}delete/${userId}`)
    }
}
export default UserServices;
