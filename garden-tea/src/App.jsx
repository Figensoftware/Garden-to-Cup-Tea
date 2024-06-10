import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';

function App() {


  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App;
