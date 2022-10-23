import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link} from "react-router-dom";


import Home from "./components/home";

import CreateUser from "./components/CreateUser";
import ListUser from "./components/ListUser";
 



function App() {
  return (
    <div className=" bg-success bg-gradient container text-white">
     {/* <h1>Desenvolvimento WEB 2022.2</h1>  */}
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to={'/'} className="navbar-brand " style={{paddingLeft:10}}>RELUZ</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="navitem">
            <Link to="/" className="nav-link ">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuario
          </a>
          <ul className="dropdown-menu">
          <li className="navitem" >
            <Link to="/createUser" className="nav-link">Criar Usuario</Link>
        </li>
        <li className="navitem">
            <Link to="/listUser" className="nav-link">Listar Usuario</Link>
        </li>
        </ul>
      </li>

        
      </ul>

      </div>

      </nav>
      <Routes>
      <Route path ='/' element={ <Home/> }/>
        <Route path="createUser" element={<CreateUser />} />
        <Route path="listUser" element={<ListUser />} />
        
      </Routes>
    </div>
  );
}

export default App;
