import styles from "./App.module.css"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import RegisterWithEmail from "./pages/RegisterWithEmail/RegisterWithEmail"
import { SnackbarProvider } from 'notistack';
import CustomToast from "./custom/CustomToast"
import DynamicHorizontalLineChart from "./pages/Index/Index"

const App= ()=> {
  return (
    <SnackbarProvider Components={{
      errorComponent: CustomToast
    }} anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }} maxSnack={1} autoHideDuration={2000}>
      <div className={styles["wrap__app"]}>
        <Router>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/register"} element={<Signup />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register-with-email"} element={<RegisterWithEmail />} />
            <Route path={"/index"} element={<DynamicHorizontalLineChart />} />
          </Routes>
        </Router>
      </div>
    </SnackbarProvider>
  )
}

export default App