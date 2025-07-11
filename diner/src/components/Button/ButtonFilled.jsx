import styles from "./Button.module.css";

export default function ButtonFilled({ className, children }) {
	return (
		<button
			className={`${styles["button"]} ${styles["button-filled"]} ${
				className ? className : ""
			}`}
		>
			{children}
		</button>
	);
}
