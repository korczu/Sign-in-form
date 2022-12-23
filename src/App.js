import { Container } from "@mui/system";
import SignIn from "./SignIn";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({ login: "", password: "" });

  function onSubmit(value) {
    if (!value) throw Error("Value can not be null or undefined");
    setUser(value);
    console.log(value);
  }
  return (
    <Container maxWidth="sm">
      <SignIn onSubmit={onSubmit}></SignIn>
    </Container>
  );
}

export default App;
