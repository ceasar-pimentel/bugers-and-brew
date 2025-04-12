import React from "react";
import { NavLink, useLocation } from "react-router";
import styles from "./MenuNav.module.css";
import { PiHamburgerLight } from "react-icons/pi";
import { CiFries } from "react-icons/ci";
import { PiIceCreamDuotone } from "react-icons/pi";
import { LuCupSoda } from "react-icons/lu";
import { BsCupStraw } from "react-icons/bs";
import { CiHotdog } from "react-icons/ci";

export default function MenuNav({ className }) {
	const location = useLocation();

	return (
		<nav className={`${styles["nav"]} ${className}`}>
			<ul className={styles["menu-links-ul"]}>
				<li>
					<NavLink
						to="/front-end-demo-projects/diner/menu"
						className={({ isActive }) =>
							isActive ? styles["icon-active"] : ""
						}
						end
					>
						<PiHamburgerLight className={styles["icon"]} />
					</NavLink>
				</li>
				<li>
					<NavLink
						to="sides"
						className={({ isActive }) =>
							isActive ? styles["icon-active"] : ""
						}
					>
						<CiFries className={`${styles["icon"]}`} />
					</NavLink>
				</li>
				<li>
					<NavLink
						to="veggies-more"
						className={({ isActive }) =>
							isActive ? styles["icon-active"] : ""
						}
					>
						<CiHotdog className={`${styles["icon"]}`} />
					</NavLink>
				</li>
				<li>
					<NavLink
						to="deserts"
						className={({ isActive }) =>
							isActive ? styles["icon-active"] : ""
						}
					>
						<PiIceCreamDuotone className={`${styles["icon"]}`} />
					</NavLink>
				</li>
				<li>
					<NavLink
						to="drinks"
						className={({ isActive }) =>
							isActive ? styles["icon-active"] : ""
						}
					>
						<BsCupStraw className={`${styles["icon"]}`} />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
