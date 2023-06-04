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
import CustomToast from "./custom/CustomToast";
import { useEffect, useState } from "react";
import Index from "./pages/Index/Index";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import UserProvider from "./components/UserProvider/UserProvider";
import SocketContainer from "./utils/SocketContainer/SocketContainer";
import Cookies from "js-cookie";
import setting from "./api/auth/setting";
import refresh from "./api/auth/refresh";
import UserProfile from "./pages/UserProfile/UserProfile";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  useEffect(() => {
    (async () => {
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
    })();
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
        errorComponent: CustomToast,
      }}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      maxSnack={1}
      autoHideDuration={2000}
    >
      <div className={styles["wrap__app"]}>
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
                          element={Index}
                        />
                      }
                    />
                    <Route
                      path="/user/profile"
                      element={
                        <AuthRoute
                          isAuthenticated={isAuthenticated}
                          element={UserProfile}
                        />
                      }
                    />
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

export default App;
