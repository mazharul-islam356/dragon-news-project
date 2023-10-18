import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import Navbar from "../pages/Navbar/Navbar";

const Root = () => {
    
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;