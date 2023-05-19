import React, { createContext, useEffect, useState } from 'react'
import profile_user from '../../api/profile/profile_user'

export const UserProviderContext= createContext()

const UserProvider = ({children}) => {
  const [userData, setUserData]= useState()
  useEffect(()=> {
    (async ()=> {
        const result= await profile_user()
        setUserData(result)
    })()
  }, [])
  return (
    <UserProviderContext.Provider value={{userData, setUserData}}>
      {children}
    </UserProviderContext.Provider>
  )
}

export default UserProvider