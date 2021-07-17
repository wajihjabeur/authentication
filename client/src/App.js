import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/route/PrivateRoute";
import { currentUser } from "./Redux/actions/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Signup} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
