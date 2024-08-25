import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">

			<h3 className=" mx-1">Lista de contactos</h3>

			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary mx-4">Ver contactos</button>
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