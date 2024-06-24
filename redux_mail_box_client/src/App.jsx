import SignIn from "./auth/SignIn";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import SignUp from "./auth/SignUp";

function App() {
  return (<>
    <Switch>
      <Route path="/signup"> <SignUp></SignUp> </Route>
      <Route path="/"> <SignIn></SignIn> </Route>
    </Switch>
  </>)
};

export default App;