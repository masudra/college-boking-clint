import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shear/Navbar/Navbar";
import Footer from "../Pages/Shear/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;