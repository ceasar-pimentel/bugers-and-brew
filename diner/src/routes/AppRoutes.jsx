import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home, Menu } from "../pages";

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route
					path="/front-end-demo-projects/diner/"
					element={<Home />}
				></Route>
			</Routes>
		</Router>
	);
}
