// import DB from '../data/data.json';
import axios from "axios"

export const service = {
    getData
};

const BASE_URL = "http://localhost:5000/"


// function getData(form) {
//     const filteredData = DB.filter((item) => form.email === item.email)
//     if (!filteredData.length) return { error:'E-mail не найден'}
//     if(form.number){
//         const filterByNum = filteredData.filter((item) => form.number === item.number)
//         if (!filterByNum.length) return { error:'Number не найден'}
//         return filterByNum
//     }
//     return filteredData
// }
//    const response = await axios.get("http://localhost:5000/get-data")

async function getData(form) {
    const dataToSend = `?email=${form.email}&number=${form.number}`
    return axios.get('http://localhost:5000/get-data' + dataToSend)
        .then((res) => {
            console.log(res)
            return res
        })



}
