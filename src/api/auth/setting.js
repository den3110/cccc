import Cookies from "js-cookie"
import instance from ".."

const setting= async ()=> {
    const res= await instance.get("/api/auth/auth/settings", {headers: {
        "Authorization": "Bearer "+ Cookies.get("accessToken")
    }})
    const result= await res.data
    return result
}

export default setting