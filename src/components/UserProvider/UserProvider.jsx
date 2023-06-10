import React, { createContext, useEffect, useState } from 'react'
import profile_user from '../../api/profile/profile_user'
import user_overview from '../../api/profile/overview'
import spot_balance from '../../api/profile/spot_balance'

export const UserProviderContext= createContext()

const UserProvider = ({children}) => {
  const [userData, setUserData]= useState()
  const [userOverview, setUserOverview]= useState()
  const [userBalance, setUserBalance]= useState()

  useEffect(()=> {
    (async ()=> {
        const result= await profile_user()
        setUserData(result)
    })()
  }, [])
  useEffect(()=> {
    (async ()=> {
      const result= await user_overview()
      setUserOverview(result)
    })()
  }, [])
  useEffect(()=> {
    (async ()=> {
      const result= await spot_balance()
      setUserBalance(result)
    })()
  }, [])
  return (
    <UserProviderContext.Provider value={{userData, setUserData, userOverview, userBalance, setUserBalance}}>
      {children}
    </UserProviderContext.Provider>
  )
}

export default UserProvider 