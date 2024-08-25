import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<h4 className=" mx-3 text-secondary ">Ejercicio lista de contactos.</h4>

			<div className="ml-auto">
				<Link to="/add">
					<button className="btn btn-success mx-4">Añadir contacto</button>
				</Link>
			</div>
		</nav>
	);
};
// SEudo Código:

// 1. Crear vista contactos
// 2. Listar los contactos
//3. Crear vista formulario de contacto
// 