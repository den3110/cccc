import instance from ".."

const login= async (data)=> {
    const res= await instance.post("/api/auth/auth/token", {...data})
    const result= await res.data
    return result
}

export default login