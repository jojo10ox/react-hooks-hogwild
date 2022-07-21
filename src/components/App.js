import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogList 
				piggies={hogs}
			/>
		</div>
	);
}

export default App;
