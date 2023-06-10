import Cookies from "js-cookie"
import instance from ".."

const spot_balance= async ()=> {
    const res= await instance.get("/api/wallet/binaryoption/spot-balance", {headers: {
        "Authorization": "Bearer "+ Cookies.get("accessToken")
    }})
    const result= await res.data
    return result
    
}

export default spot_balance