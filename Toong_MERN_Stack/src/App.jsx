import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Navbar from "./components/Navbar";

export default function App(){
    return(
        <div className="w-screen h-screen">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/students" element={<Students />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}