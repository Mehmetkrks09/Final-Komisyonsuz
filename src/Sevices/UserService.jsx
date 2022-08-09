import axios from "axios";

export default class UserService {

    getUser() {
        return axios.get("https://golden-day-2022.herokuapp.com/api/user/getAll");
    }
    postUser(values) {
        return axios.post("https://golden-day-2022.herokuapp.com/api/user/add",values);

    }
    findById(id){
         return axios.get("https://golden-day-2022.herokuapp.com/api/user/findById?id="+id)
    }
    postPhoto(id,fd){
          return axios.post("https://golden-day-2022.herokuapp.com/api/user/imageUpload?userId="+id,fd)
    }
    updateUser(id,adress,password,email){
          return axios.put("https://golden-day-2022.herokuapp.com/api/user/UpdateUser?adress="+adress+"&email="+email+"&id="+id+"&password="+password)
    } 
    getByMail(mail){
        return axios.get("https://golden-day-2022.herokuapp.com/api/user/findByMail?mail="+mail);
    }
}