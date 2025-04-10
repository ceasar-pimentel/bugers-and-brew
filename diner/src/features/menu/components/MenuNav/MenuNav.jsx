import React from "react";
import { NavLink } from "react-router";
import styles from "./MenuNav.module.css";
import { PiHamburgerLight } from "react-icons/pi";
import { CiFries } from "react-icons/ci";
import { IoIceCreamOutline } from "react-icons/io5";
import { LuCupSoda } from "react-icons/lu";
import { CiHotdog } from "react-icons/ci";

export default function MenuNav({ className }) {
	return (
		<nav className={`${styles["nav"]} ${className}`}>
			<ul className={styles["menu-links-ul"]}>
				<li>
					<NavLink>
						<PiHamburgerLight className={styles["icon"]} />
					</NavLink>
				</li>
				<li>
					<NavLink>
						<CiFries className={styles["icon"]} />
					</NavLink>
				</li>
				<li>
					<NavLink>
						<CiHotdog className={styles["icon"]} />
					</NavLink>
				</li>
				<li>
					<NavLink>
						<IoIceCreamOutline className={styles["icon"]} />
					</NavLink>
				</li>
				<li>
					<NavLink>
						<LuCupSoda className={styles["drink-icon"]} />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
