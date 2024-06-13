import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';
import Loading from "./Components/Loading";

function App() {


  return (
    <>
      <Container>
        <Outlet />
        <Loading />
      </Container>
    </>
  )
}

export default App;
