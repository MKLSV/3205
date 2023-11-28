import DB from '../data/data.json' assert { type: "json" };

export const service = {
    getData
};

// function getData(form) {
//     return new Promise((resolve) => {                           //Возвращает промис спустя 5 секунд для реализации асинхронной функции
//         setTimeout(() => {
//             console.log(form, 'form')
//             const filteredData = DB.filter((item) => form.email === item.email)  //Фильтрует базу данных и возвращает данные связанные с е-мейлом
//             if (!filteredData.length) return { error: 'E-mail не найден' }
//             if (form.number) {
//                 const filterByNum = filteredData.filter((item) => form.number === item.number) //Фильтрует найденные е-мейлы и ищет заданный номер среди них
//                 console.log(filterByNum, 'filter')
//                 if (!filterByNum.length) return { error: 'Number не найден' }
//                 return filterByNum
//             }
//             resolve(filteredData);
//         }, 5000);
//     });
// }
function getData(form) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(form, 'form');
            const filteredData = DB.filter((item) => form.email === item.email);  //Фильтрует базу данных и возвращает данные связанные с е-мейлом
            if (!filteredData.length) {
                resolve({ error: 'E-mail не найден' }); // Возвращает обьект с ошибкой
                return;
            }
            if (form.number) {
                const filterByNum = filteredData.filter((item) => form.number === item.number);  //Фильтрует найденные е-мейлы и ищет заданный номер среди них
                console.log(filterByNum, 'filter');
                if (!filterByNum.length) {
                    resolve({ error: 'Number не найден' }); // Возвращает обьект с ошибкой
                    return;
                }
                resolve(filterByNum);
                return;
            }
            resolve(filteredData);
        }, 5000);
    });
}