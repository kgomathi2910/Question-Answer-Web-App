import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./component/auth/Login";
import Quora from "./component/Quora";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            // below is the payload
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else { // in case of malicious user
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
  return <div className="App">{user ? <Quora /> : <Login />}</div>;
}

export default App;