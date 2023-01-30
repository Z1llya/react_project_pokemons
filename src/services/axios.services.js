import axios from "axios";
import {baseURL} from "../constans";

const axiosService = axios.create({baseURL});

export {
    axiosService
}