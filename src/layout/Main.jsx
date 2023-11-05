import { Outlet } from "react-router";
import Navbar from "../components/Sheard/Navbar"
import Footer from "../components/Sheard/Footer"

const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;