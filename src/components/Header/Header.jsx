import styles from "./Header.module.css";
import { Navigation } from "../../components";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbPaperBag } from "react-icons/tb";
import React from "react";

export default function Header({ className }) {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<header className={`${styles["header"]} ${className} `}>
			<RxHamburgerMenu
				onClick={() => {
					console.log("clicked");
					setIsOpen(true);
				}}
				className={styles["open-nav-btn"]}
			/>
			<h1 className={styles["title"]}>Burgers & Brews</h1>
			<Navigation
				className={`${styles["nav"]} ${isOpen ? styles["nav-open"] : ""}`}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
			<TbPaperBag className={styles["bag"]} />
		</header>
	);
}
