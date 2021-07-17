import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "../../Redux/actions/user";
const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <button onClick={() => {dispatch(logOut())
    history.push("/")}}>LOG OUT</button>
       dashboard
    </div>
  );
};

export default Dashboard;
