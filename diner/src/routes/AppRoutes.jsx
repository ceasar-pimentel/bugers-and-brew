import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home, Menu, Locations, Catering, Careers, Login } from "../pages";

export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/front-end-demo-projects/diner/" element={<Home />}>
					<Route index element={<Menu />}></Route>
					<Route path="locations" element={<Locations />} />
					<Route path="catering" element={<Catering />} />
					<Route path="careers" element={<Careers />} />
				</Route>
				<Route
					path="/front-end-demo-projects/diner/login"
					element={<Login />}
				/>
			</Routes>
		</Router>
	);
}
