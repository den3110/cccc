import instance from ".."

const register= async (data)=> {
    const res= await instance.put("/api/auth/account/register", {...data})
    const result= await res.data
    return result
}

export default register