import React from "react"; //Main React.js library




export const Navbar = () => {
	return (
  
  // <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  //   <div className="container-fluid">
  //     <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
  //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  //     <span className="navbar-toggler-icon"></span>
  //   </button>
  //     <div className="collapse navbar-collapse d-flex" id="navbarNavAltMarkup">
  //       <div className="navbar-nav justify-content-end">
  //         <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
  //         <a className="nav-link text-white" href="#">About</a>
  //         <a className="nav-link text-white" href="#">Services</a>
  //         <a className="nav-link text-white" href="#">Contact</a>
  //       </div>
  //     </div>
  //   </div>
  // </nav>
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
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





