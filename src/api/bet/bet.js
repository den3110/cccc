import Cookies from "js-cookie"
import instance from ".."

const betApi= async (data)=> {
    const res= await instance.post("/api/wallet/binaryoption/bet",{...data} , {headers: {
        "Authorization": "Bearer "+ Cookies.get("accessToken")
    }})
    const result= await res.data
    return result
    
}

export default betApi