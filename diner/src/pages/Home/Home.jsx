import { Outlet } from "react-router";
import { Header } from "../../components";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<>
			<Header className={styles["header"]} />
			<main className={styles["outlet"]}>
				<div className={styles["carousel"]}>
					<h1>place holder for carousel</h1>
				</div>
				<Outlet />
			</main>
		</>
	);
}
