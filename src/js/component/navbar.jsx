import React from "react"; //Main React.js library




export const Navbar = () => {
	return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
				{/* <Link to="/"> */}
					<img src="https://www.citizensinc.com/img/thumb/cica-life-colored-rgb-2.png" className="logo" />
				{/* </Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav d">
        <li className="nav-item">
          <a className="nav-link active text-white me-5" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white me-5" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white me-5" href="#">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white me-5" href="#">Calculadora</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white me-5" href="#">Contactanos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white btn btn-primary" href="#">Trabaja con nosotros</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  )
};
/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/





