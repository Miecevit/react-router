import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./sayfalar/Layout";
import Home from "./sayfalar/Home";
import Blogs from "./sayfalar/Blogs";
import Contact from "./sayfalar/Contact";
import NoPage from "./sayfalar/NoPage";

function Header(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />}/>
                    <Route path="Blogs" element={<Blogs />}/>
                    <Route path="Contact" element={<Contact />}/>
                    <Route path="*" element={<NoPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Header;