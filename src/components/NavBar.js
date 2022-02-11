import 'bootstrap/dist/css/bootstrap.min.css';

import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning justify-content-between">
                <a className="navbar-brand" href="/">Coder.Inthenet</a> 

                {/* div sin finalidad para centrar el div siguiente. Truco de bootstrap obtenido de https://www.geeksforgeeks.org/how-to-align-navbar-items-to-center-using-bootstrap-4/ */}
                <div className="collapse navbar-collapse"></div>
                <div className="collapse navbar-collapse" id="navbar-list-9">
                    <ul className="navbar-nav navbar-center">
                        <li className="nav-item">
                            <NavLink to="/" className ="nav-link">Inicio</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/cocina" className ="nav-link">Cocina</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/calefaccion" className ="nav-link">Calefacción</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category/lavado" className ="nav-link">Lavado</NavLink> 
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end " id="navbar-list-9">
                    <CartWidget/>  
                </div>
            </nav>            

        </div>
    );
}

export default NavBar;