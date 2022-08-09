import axios from "axios";

export default class CreateDayService{

    getCreateDay(){
        return axios.get("https://golden-day-2022.herokuapp.com/api/createDay/getall");
    }
    postCreateDay(values){
         return axios.post("https://golden-day-2022.herokuapp.com/api/createDay/add",values)
    }

    getByUserId(id){
          return axios.get("https://golden-day-2022.herokuapp.com/api/createDay/getByuserId?id="+id)
    }
}