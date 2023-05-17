import axios from "axios";

const instance= axios.create({
    baseURL: "https://starisa.net",
   
})

export default instance