import { Outlet } from "react-router";
import { Header } from "../components";

export default function Home() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
