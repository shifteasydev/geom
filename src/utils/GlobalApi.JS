import axios from "axios"


const apikey=process.env.NEXT_PUBLIC_STRAPI_API_TOKEN

const apiurl="http://localhost:1337/api"

const axiosClient=axios.create({
    baseURL:apiurl,
    headers:{
        'Authorization':`Bearer ${apikey}`,
    },
})

const getTopmusicGroup=()=>axiosClient.get('./top-music-group-lists?populate=*')

const getPopularCategories=()=>axiosClient.get('./popular-categories-sections?populate=*')

export default {
    getTopmusicGroup,
    getPopularCategories
}