import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Blogs from './Blogs';
import Contact from './Contact';
import NoPage from './NoPage';

export default function Router() {
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
