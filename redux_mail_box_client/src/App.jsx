import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "./pages/MainPage";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "./auth/SignIn";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./auth/SignUp";
import { setLogIn } from "./store/reduxStore";

function App() {

  const isUserLogIn = useSelector((store) => store.authentication.isUserLogIn);
  console.log(isUserLogIn);

  const dispatch = useDispatch();

  // // Here, getting the token for sticking on that particular page with the help of LS token ;
  // // Means after refreshing the page we are able to see that particular page only;
  const localToken = JSON.parse(localStorage.getItem("MBox-Token"));

  useEffect(() => {
    if (localToken) {
      dispatch(setLogIn(localToken));
    }
  }, [localToken]);


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
