import styles from "./App.module.css"
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home/Home"
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import RegisterWithEmail from "./pages/RegisterWithEmail/RegisterWithEmail"
import { SnackbarProvider } from 'notistack';
import CustomToast from "./custom/CustomToast"
import { useState } from "react"
import Index from "./pages/Index/Index"
import AuthRoute from "./components/AuthRoute/AuthRoute"
import UserProvider from "./components/UserProvider/UserProvider"
import SocketContainer from "./utils/SocketContainer/SocketContainer"


const App= ()=> {
  const [isAuthenticated, setIsAuthenticated]= useState(false)

  return (
    <SnackbarProvider Components={{
      errorComponent: CustomToast
    }} anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }} maxSnack={1} autoHideDuration={2000}>
      <div className={styles["wrap__app"]}>
        <Router>
          {
            isAuthenticated=== true && 
            <UserProvider>
              <SocketContainer chidren={<Routes>
                  <Route path={"/index"} element={<AuthRoute isAuthenticated={isAuthenticated} element={Index} />} />
                </Routes>}>
              </SocketContainer>
            </UserProvider>
          }
          {
            isAuthenticated=== false && 
            <Routes>
              <Route path={"/index"} element={<Navigate to={"/login"} replace />} />
              <Route path={"/"} element={<Home />} />
              <Route path={"/register"} element={<Signup />} />
              <Route path={"/login"} element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path={"/register-with-email"} element={<RegisterWithEmail />} />
            </Routes>
          }
        </Router>
      </div>
    </SnackbarProvider>
  )
}

export default App