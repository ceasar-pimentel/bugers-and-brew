import styles from "./Navigation.module.css";
import { NavLink } from "react-router";
import { IoClose } from "react-icons/io5";
export default function Navigation({ className, isOpen, setIsOpen }) {
	function getActiveStyle({ isActive }) {
		return isActive
			? `${styles["link"]} ${styles["link-active"]}`
			: styles["link"];
	}

	function handleLinkOnClick() {
		setIsOpen(false);
	}

	console.log(isOpen);
	return (
		<nav className={className}>
			<IoClose
				className={styles["btn-close"]}
				onClick={() => setIsOpen(false)}
			/>
			<ul className={styles["nav-links"]}>
				<li>
					<NavLink
						to="/front-end-demo-projects/diner/menu"
						className={getActiveStyle}
						onClick={handleLinkOnClick}
					>
						Menu
					</NavLink>
				</li>
				<li>
					<NavLink
						to="catering"
						className={getActiveStyle}
						onClick={handleLinkOnClick}
					>
						Catering
					</NavLink>
				</li>
				<li>
					<NavLink
						to="locations"
						className={getActiveStyle}
						onClick={handleLinkOnClick}
					>
						Locations
					</NavLink>
				</li>
				<li>
					<NavLink
						to="careers"
						className={getActiveStyle}
						onClick={handleLinkOnClick}
					>
						Careers
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
