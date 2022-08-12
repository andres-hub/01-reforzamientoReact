import aixos from 'axios'


export const reqResApi = aixos.create({
    baseURL: 'https://reqres.in/api'
});