import axios from "axios";

export const instance1 =  axios.create({
    baseURL:'http://www.omdbapi.com/'
})

export const instance2 =  axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})
