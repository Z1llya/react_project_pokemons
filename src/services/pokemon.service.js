import {axiosService} from "./axios.services";
import {urls} from "../constans/urls";

const pokemonService = {
    getAll:(offset=0)=> axiosService.get(urls.pokemon,{params:{offset}}),
    getPoke:(name)=> axiosService.get(urls.pokemon+`${name}`),
    getForms:(name)=> axiosService.get(urls.forms+`${name}`)
}

export {
    pokemonService
}