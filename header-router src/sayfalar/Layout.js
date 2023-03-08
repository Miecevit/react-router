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
        <div className="p-3 bg-dark text-white">
            <div className="container bg-dark text-white">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
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
            </ul>
            <div>
            <div id="user_name_div" style={{display:"inline-block"}}></div>
                <div id="btn_div" className="text-end" style={{display:"inline-block"}}>
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
                <div id="logout_btn_div" style={{display:"inline-block"}}>
                <button 
                    id="logout_Btn" 
                    type="button" 
                    className="btn btn-danger" 
                    style={{ display: 'none' }} 
                    onClick={() => logout()} 
                    >
                      Çıkış
                      </button>
                </div>
            </div>
            </div>
            </div>
            </div>
        </nav>

        <Outlet />

        </>
    );
}
export default Layout;