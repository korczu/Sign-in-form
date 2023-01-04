import { Container } from "@mui/system";
import SignIn from "./Components/SignIn";
import React, { useState } from "react";
import MainContent from "./Components/MainContent";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

const initUser = { username: "", password: "" };

function App() {
  const [user, setUser] = useState(initUser);
  const [showSignIn, setShowSignIn] = React.useState(false);

  const pages = ["Chart", "Autocomplete", "Form"];
  const [currentPage, setCurrentPage] = React.useState(pages[2]);

  function onSubmit(value) {
    if (!value) throw Error("Value can not be null or undefined");
    setUser(value);
    setShowSignIn(false);
  }

  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ color: "white" }}
              onClick={() => {
                setShowSignIn(false);
                setCurrentPage(page);
              }}
            >
              {page}
            </Button>
          ))}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "end" }}>
            {user === initUser ? (
              <Button
                sx={{ color: "white" }}
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </Button>
            ) : (
              user.username
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {showSignIn ? (
        <SignIn onSubmit={onSubmit} />
      ) : (
        <MainContent currentPage={currentPage} setUser={setUser}></MainContent>
      )}
    </Container>
  );
}

export default App;
