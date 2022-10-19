import React from "react"; //Main React.js library




export const Navbar = () => {
	return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
				{/* <Link to="/"> */}
					<img src="https://github.com/frako23/landing-page-with-react/blob/9146230f9997511b7de769719c140e44b68a99f0/src/img/rigo-baby.jpg" className="logo" />
				{/* </Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Calculadora</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contactanos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Agenda una cita</a>
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





