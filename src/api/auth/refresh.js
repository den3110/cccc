import Cookies from "js-cookie"
import instance from ".."

const refresh= async (data)=> {
    const res= await instance.post("/api/auth/auth/token?refresh=1", {...data }, {headers: {
        "Authorization": "Bearer "+ Cookies.get("accessToken")
    }})
    const result= await res.data
    return result
}

export default refresh