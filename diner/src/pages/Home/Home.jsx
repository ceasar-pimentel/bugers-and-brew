import styles from "./Home.module.css";
import { Outlet } from "react-router";
import { Header } from "../../components";
import MenuNav from "../../features/menu/components/MenuNav/MenuNav";

export default function Home() {
	// i think home and menu need to be combined. Will do this tomorrow.
	return (
		<>
			<Header className={styles["header"]} />
			<main className={styles["outlet"]}>
				<section className={styles["menu-section"]}>
					<Outlet />
				</section>
			</main>
		</>
	);
}
