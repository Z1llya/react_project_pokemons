import {axiosService} from "./axios.services";
import {urls} from "../constans";

const pokemonService = {
    getAll:(offset=0,limit =0)=> axiosService.get(urls.pokemon,{params:{offset,limit}}),
    getPoke:(name)=> axiosService.get(urls.pokemon+`${name}`),
    getForms:(name)=> axiosService.get(urls.forms+`${name}`),
    getAllAbility:(offset=0, limit =0)=> axiosService.get(urls.ability,{params:{offset,limit}}),
    getAbility:(name)=> axiosService.get(urls.ability+`${name}`),
    getType:(name)=> axiosService.get(urls.type+`${name}`),
    getAllType:(offset=0, limit =0)=> axiosService.get(urls.type,{params:{offset,limit}})
}

export {
    pokemonService
}