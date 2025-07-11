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
						<Route index element={<MenuSection type="burger" />} />
						<Route path="sides" element={<MenuSection type="side" />} />
						<Route path="veggies-more" element={<MenuSection type="other" />} />
						<Route path="deserts" element={<MenuSection type="dessert" />} />
						<Route path="drinks" element={<MenuSection type="beverage" />} />
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
