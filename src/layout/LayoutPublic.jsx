import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
    return (
        <><div className="bg-dark text light">
            <Navbar/>
            <main className="container">
                <Outlet/>
            </main>
            <Footer />
        </div>
        </>
    )
};

export default LayoutPublic;