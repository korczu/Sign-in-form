import { Container } from "@mui/system";
import SignIn from "./Components/SignIn";
import React, { useState } from "react";
import MainContent from "./Components/MainContent";

function App() {
  const initUser = { login: "", password: "" };
  const [user, setUser] = useState(initUser);

  function onSubmit(value) {
    if (!value) throw Error("Value can not be null or undefined");
    setUser(value);
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
