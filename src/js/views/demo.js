import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { func } from "prop-types";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	function deleteItem (indexToDelete){
		console.log ('deleteItem', indexToDelete)
		console.log (store.contacts.filter ((elemento, index)=> index !=indexToDelete))
		  
	} 
	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
				{store.contacts.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							>
							<div>
							<img src="../../../img/frodo&paula.jpg" alt="Frodo y Paula"></img>

								<h4>{item.name}</h4>
							
								{item.address}
								<br/>
								{item.phone}
								<i class="fa-regular fa-pen-to-square" onClick={() => actions.deleteContact(index)}></i>
						
								<button className="btn btn-success" onClick={() => actions.deleteContact(index)}>
								eliminar
								</button>
							</div>
						</li>

								
							
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Ir a inicio</button>
			</Link>
		</div>
	);
};
