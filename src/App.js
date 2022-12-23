import { Container } from "@mui/system";
import SignIn from "./SignIn";

function App() {
  function onSubmit() {
    console.log("Submit");
  }
  return (
    <Container maxWidth="sm">
      <SignIn onSubmit={onSubmit}></SignIn>
    </Container>
  );
}

export default App;
