import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Demo = () => (
	<div className="text-center mt-5">
		<h1 className="bg-light text-secondary">Lista de contactos</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			ESto también funcionando
		</a>
	</div>
);
