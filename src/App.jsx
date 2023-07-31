import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

//import Form from "./components/UI/Forms/Form.js";

//Routes
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default App;
