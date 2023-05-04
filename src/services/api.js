import axios from "axios";

//57350000/json

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});
 export default api;