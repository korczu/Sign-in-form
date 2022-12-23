import { Container } from "@mui/system";
import SignIn from "./SignIn";
import React, { useState } from "react";
import MainContent from "./MainContent";

function App() {
  const initUser = { login: "", password: "" };
  const [user, setUser] = useState(initUser);

  function onSubmit(value) {
    if (!value) throw Error("Value can not be null or undefined");
    setUser(value);
    console.log(value);
  }

  return (
    <Container maxWidth="sm">
      {user === initUser ? (
        <SignIn onSubmit={onSubmit}></SignIn>
      ) : (
        <MainContent login={user.login}></MainContent>
      )}
    </Container>
  );
}

export default App;
