import { Outlet } from "react-router";
import Navigation from "../components/Navigation/Navigation";

export default function Home() {
	return (
		<>
			<h1>test</h1>
			<Navigation />
			<Outlet />
		</>
	);
}
