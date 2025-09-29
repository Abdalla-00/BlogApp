import { Outlet } from "react-router-dom";
import HeaderPage from "./components/HeaderPage";



function App() {
  return (
    <>
      
    <HeaderPage/>
      <Outlet/>
    </>
  );
}

export default App;
