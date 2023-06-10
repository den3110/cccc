import Cookies from "js-cookie"
import instance from ".."

const user_overview= async ()=> {
    const res= await instance.get("/api/wallet/binaryoption/user/overview", {headers: {
        "Authorization": "Bearer "+ Cookies.get("accessToken")
    }})
    const result= await res.data
    return result
    
}

export default user_overview