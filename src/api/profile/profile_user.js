import Cookies from "js-cookie"
import instance from ".."

const profile_user= async ()=> {
    const res= await instance.get("/api/auth/me/profile", {headers: {
        "Authorization": "Bearer "+ Cookies.get("accessToken")
    }})
    const result= await res.data
    return result
    
}

export default profile_user