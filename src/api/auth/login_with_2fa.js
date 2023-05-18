import instance from ".."

const login2fa= async (data)=> {
    const res= await instance.post("/api/auth/auth/token-2fa", {
        ...data
    })
    const result= await res.data
    return result
}

export default login2fa