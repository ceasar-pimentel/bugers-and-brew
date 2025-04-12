import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { Home, Menu, Locations, Catering, Careers, Login } from "../pages";
import MenuSection from "../pages/Menu/MenuSection";
export default function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/front-end-demo-projects/diner/" element={<Home />}>
					<Route index element={<Navigate to="menu" />}></Route>

					<Route path="menu" element={<Menu />}>
						<Route index element={<MenuSection />} />
						<Route path="sides" element={<h1>sides</h1>} />
						<Route path="veggies-more" element={<h1>veggies and more</h1>} />
						<Route path="deserts" element={<h1>dessert</h1>} />
						<Route path="drinks" element={<h1>drinks</h1>} />
					</Route>
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
