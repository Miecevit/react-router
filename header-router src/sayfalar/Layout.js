import {Outlet, Link} from "react-router-dom";
import {logout} from '../Functions';
import {goster} from '../Functions';



const stil = {
    display: 'inline-block',
    margin: '0 10px'
};

const hover_btn = {
    className: "btn btn-lg btn-danger"
}

const normal_btn = {
    className: "btn btn-lg btn-warning"
}


const Layout = () => {
    return(
        <>
        <nav>
            <ul>
                <li style={stil}>
                    <Link to="/"
                      className="btn btn-lg btn-warning"
                      onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                      onMouseOut={(e) => Object.assign(e.target, normal_btn)}
                      >Home</Link>
                </li>
                <li style={stil}>
                    <Link to="/Blogs"
                    className="btn btn-lg btn-warning"
                    onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                    onMouseOut={(e) => Object.assign(e.target, normal_btn)}
                    >Blogs</Link>
                </li>
                <li style={stil}>
                    <Link to="/Contact"
                    className="btn btn-lg btn-warning"
                    onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                    onMouseOut={(e) => Object.assign(e.target, normal_btn)}
                    >Contact</Link>
                </li>
                <div id="btn_div" style={{display:"inline-block"}}>
                    <li style={stil}>
                        <Link to="/Login"
                        className="btn btn-lg btn-warning"
                        onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                        onMouseOut={(e) => Object.assign(e.target, normal_btn)}
                        >Giriş</Link>
                    </li>
                    <li style={stil}>
                        <Link to="/SignUp"
                        className="btn btn-lg btn-warning"
                        onMouseOver={(e) => Object.assign(e.target, hover_btn)}
                        onMouseOut={(e) => Object.assign(e.target, normal_btn)}
                        >Kayıt Ol</Link>
                    </li>
                </div>
                
            </ul>
        </nav>

        <Outlet />

        </>
    );
}
export default Layout;