import axios from "axios";

export default class PaymentService{

    getPayment(){
        return axios.get("https://golden-day-2022.herokuapp.com/api/payment/getAll");
    }
    updatePayment(dayId,userId){
        return axios.put("https://golden-day-2022.herokuapp.com/api/payment/paymentUpdate?dayId="+dayId+"&state=true&user%C4%B0d="+userId)
    }
}