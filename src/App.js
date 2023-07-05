import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import RegisterWithEmail from "./pages/RegisterWithEmail/RegisterWithEmail";
import { SnackbarProvider } from "notistack";
import ErrorToast from "./custom/ErrorToast";
import { useEffect, useState } from "react";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import UserProvider from "./components/UserProvider/UserProvider";
import SocketContainer from "./utils/SocketContainer/SocketContainer";
import Cookies from "js-cookie";
// import setting from "./api/auth/setting";
import refresh from "./api/auth/refresh";
import UserProfile from "./pages/UserProfile/UserProfile";
import SuccessToast from "./custom/SuccessToast";
import "./responsive.css"
// import Index from "./pages/Index/Index";
import { lazy } from "react";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
const Index= lazy(()=> import("./pages/Index/Index"))

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  // const isDesktopScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const refreshToken= async () => {
    if (Cookies.get("accessToken")) {
      const result = await refresh({
        captcha: "string",
        captcha_geetest: {
          captcha_output: "",
          gen_time: "",
          lot_number: "",
          pass_token: "",
        },
        client_id: "starisa-web",
        grant_type: "refresh_token",
        refresh_token: Cookies.get("refreshToken"),
      });
      if (result?.ok === true) {
        Cookies.set("accessToken", result?.d?.access_token);
        Cookies.set("refresh_token", result?.d?.refresh_token);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }
  useEffect(() => {
    refreshToken()
    const intervalId= setInterval(()=> {
      refreshToken()
    }, 300000)
    return ()=> clearInterval(intervalId)
    
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  }, []);
  return (
    <SnackbarProvider
      Components={{
        errorComponent: ErrorToast,
        successComponent: SuccessToast
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      maxSnack={3}
      autoHideDuration={2000}
    >
      <div className={`${styles["wrap__app"]} ${isMobileScreen ? "mobile-version" : ""} vi`}>
        <Router>
          {isAuthenticated === true && (
            <UserProvider>
              <SocketContainer
                chidren={
                  <Routes>
                    <Route
                      path={"/*"}
                      element={
                        <AuthRoute
                          isAuthenticated={isAuthenticated}
                          element={LoadIndex}
                        />
                      }
                    />
                    
                    {/* <Route
                      path="/user/profile"
                      element={
                        <AuthRoute
                          isAuthenticated={isAuthenticated}
                          element={UserProfile}
                        />
                      }
                    /> */}
                    <Route
                      path={"/login"}
                      element={<Navigate to={"/index"} replace />}
                    />
                    <Route 
                      path={"/"}
                      element={<Navigate to={"/index"} replace />}
                    />
                  </Routes>
                }
              ></SocketContainer>
            </UserProvider>
          )}
          {isAuthenticated === false && (
            <Routes>
              <Route path={"/*"} element={<Navigate to={"/index"} />} />
              <Route
                path={"/index"}
                element={<Navigate to={"/login"} replace />}
              />
              <Route path={"/"} element={<Home />} />
              <Route path={"/register"} element={<Signup />} />
              <Route
                path={"/login"}
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
              <Route
                path={"/register-with-email"}
                element={<RegisterWithEmail />}
              />
            </Routes>
          )}
        </Router>
      </div>
    </SnackbarProvider>
  );
};

const LoadIndex= ()=> {
  return (
    <Suspense fallback={<div></div>}>
      <Index />
    </Suspense>
  )
}

export default App;
