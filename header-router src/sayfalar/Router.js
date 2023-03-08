import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';
import Login from './Login';
import SignUp from './SignUp';



export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />}/>
                    <Route path="Blogs" element={<Blogs />}/>
                    <Route path="Contact" element={<Contact />}/>
                    <Route path="Login" element={<Login />}/>
                    <Route path="SignUp" element={<SignUp />}/>
                    <Route path="*" element={<NoPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
