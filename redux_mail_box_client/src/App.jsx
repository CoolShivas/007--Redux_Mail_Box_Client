import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "./pages/MainPage";
import { useSelector } from "react-redux";
import SignIn from "./auth/SignIn";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./auth/SignUp";

function App() {

  const isUserLogIn = useSelector((store) => store.authentication.isUserLogIn);


  // const navigate = useHistory();

  // useEffect(() => {
  //   if (isUserLogIn) {
  //     navigate.push("/Home");
  //   }
  // }, [isUserLogIn, navigate]);
  console.log(isUserLogIn)
  return (
    <>
      <Switch>
        {!isUserLogIn ? (
          <>
            <Route path="/" exact>
              <SignIn></SignIn>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
          </>
        ) : (
          <>
            <Route path="/mainpage">
              <MainPage />
            </Route>
          </>
        )}
      </Switch>

      {/* <MainPage></MainPage> */}
    </>
  );
}

export default App;
