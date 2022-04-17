import React, { useRef } from "react";

//include images into your bundle
import List from "./list.jsx";

//create your first component
const Home = () => {
	const listRef = useRef();

	function addItem(event) {
		// Previene el comportamiento por defecto, evitando que la pagina se recargue
		event.preventDefault();
		// Se crea un objeto "FormData" con los datos del formulario
		let data = new FormData(event.target);
		// Se obtiene el nuevo item del formulario
		let newItem = data.get("newItem");
		// Se establece el estado del items al mismo arreglo con el nuevo elemento al final
		listRef.current.newItem(newItem);
		// Reinicia el formulario
		event.target.reset();
	}
	return (
		<div>
			<div className="card mb-3">
				<div className="card-header">ToDos</div>
				<div className="card-body">
					<h5 className="card-title">
						<form onSubmit={addItem}>
							<div className="form-group">
								<input
									required
									id="newItem"
									type="text"
									className="form-control"
									placeholder="Enter new task"
									name="newItem"></input>
							</div>
							<button
								className="btn btn-primary align"
								type="submit">
								Add
							</button>
						</form>
					</h5>
					<div className="card-text">
						<List ref={listRef} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
