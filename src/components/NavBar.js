import 'bootstrap/dist/css/bootstrap.min.css';
 
const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Coder.Inthenet</a>

                    {/* div sin finalidad para centrar el div siguiente. Truco de bootstrap obtenido de https://www.geeksforgeeks.org/how-to-align-navbar-items-to-center-using-bootstrap-4/ */}
                    <div class="collapse navbar-collapse"></div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav navbar-center">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Categoría 1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Categoría 2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Categoría 3</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Categoría 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;