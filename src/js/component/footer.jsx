import React from "react"; //Main React.js library




export const Footer = () => {
	return (
		// 	<div className="container-fluid bg-dark h-5 p-3 text-white">
		// // 			<div className="row colum-6">
		// // 				<div>
		// // 					<h5 className="container">Servicios</h5>
		// // 					<ul className="container">
		// // 						<li>Asesoría financiera</li>
		// // 						<li>Protección patrimonial</li>
		// // 						<li>Planificación financiera</li>
		// // 						<li>Protección en enfermedades críticas</li>
		// // 					</ul>
		// // 				</div>
		// // 				<div>
		// // 					<h5 className="container">Dirección</h5>
		// // 					<h6>Av. Libertador, Torre EDIFICA, piso 7, Caracas, Venezuela 1060</h6>
		// // 				</div>
		// // 				<p className="text-center">Copyright © Your Webpage 2019</p></div>
		// // 		</div>

		<div className="text-center text-lg-start bg-dark text-muted">
			<div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
				<div className="me-5 d-none d-lg-block">
					<span> Mantente en contacto con nosotros a través de nuestras Redes Sociales</span>
				</div>
				<div className="iconos">
					<a href="#" className="me-4 text-reset"><i class="fab fa-instagram"></i></a>
					<a href="#" className="me-4 text-reset"><i class="fab fa-linkedin"></i></a>
					<a href="#" className="me-4 text-reset"><i class="fab fa-youtube"></i></a>
					<a href="#" className="me-4 text-reset"><i class="fab fa-tiktok"></i></a>
				</div>
			</div>
			<div className="container text-center text-md-start mt-5">
				<div className="row mt-3">
					<div className="col-md-3 ccol-lg-4 col-xl-3 mx-auto mb-4">
						<h6 className="text-uppercase fw-bold mb-4">
							KGC Group
						</h6>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quae iusto commodi, excepturi, alias maxime dicta placeat consequuntur, nihil architecto deleniti veniam provident. Labore cumque facere consectetur adipisci animi impedit.
						</p>
					</div>
					<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
						<h6 className="text-uppercase fw-bold mb-4">
							Products
						</h6>
						<p>
							<a href="#" className="text-reset">Planes de retiro</a>
						</p>
						<p>
							<a href="#" className="text-reset">Planes de estudios universitarios</a>
						</p>
						<p>
							<a href="#" className="text-reset">Planes corporativos</a>
						</p>
						<p>
							<a href="#" className="text-reset">Seguro de enfermedades críticas</a>
						</p>
					</div>
					<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
						<h6 className="text-uppercase fw-bold mb-4">
							Products
						</h6>
						<p>
							<a href="#" className="text-reset">Planes de retiro</a>
						</p>
						<p>
							<a href="#" className="text-reset">Planes de estudios universitarios</a>
						</p>
						<p>
							<a href="#" className="text-reset">Planes corporativos</a>
						</p>
						<p>
							<a href="#" className="text-reset">Seguro de enfermedades críticas</a>
						</p>
					</div>
					<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
						<h6 className="text-uppercase fw-bold mb-4">Contactanos</h6>
						<p><i class="fas fa-home me-3"></i>Av. Libertador, Torre EDIFICA, piso 7, Caracas, Venezuela 1060</p>
						<p><i class="fas fa-envelope me-3"></i>grupokgc@gmail.com</p>
						<p><i class="fas fa-phone me-3"></i>0414-3050116</p>
					</div>
				</div>
			</div>
			<div className="text-center p-4 copyright">
				<a className="text-reset fw-bold" href="#">© 2022 Copyright: frako23@gmail.com</a>
			</div>
		</div>
	)
};
/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/

