import express from "express"
import cors from "cors"
import { service } from "./service/service.js"

const app = express()
app.use(cors())

app.get('/get-data', (req, res) => {  //Создаем GET API для получения е-мейла\номера с клиентской части и отправки ответа назад
    service.getData(req.query)       //Ищем в базе данных данные связанные с полученным е-мейлом\номером
    .then((data) => {
        console.log(data)
        res.send(data)
    })
    .catch(err => {
        console.log('Error:', err)
        res.status(400).send('Cannot get data')
    })
})


app.listen(5000, () => console.log('Listening to port 5000'))