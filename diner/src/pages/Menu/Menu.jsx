import Carousel from "../../components/Carousel/Carousel";
import MenuNav from "../../features/menu/components/MenuNav/MenuNav";
import styles from "./Menu.module.css";
import { Outlet } from "react-router";
export default function Menu() {
	return (
		<>
			<div className={styles["carousel"]}>
				<Carousel>place holder for carousel</Carousel>
			</div>
			<section className={styles["menu-section"]}>
				<MenuNav className={styles["menu-nav"]} />
				<Outlet />
			</section>
		</>
	);
}
