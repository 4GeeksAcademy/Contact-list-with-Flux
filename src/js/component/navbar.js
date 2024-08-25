import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerpla</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">ESto funciona n</button>
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