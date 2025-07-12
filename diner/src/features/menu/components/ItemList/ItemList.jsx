import styles from "./ItemList.module.css";

export default function ItemList({ children }) {
	return (
		<section className={`${styles["menu-section-grid"]}`}>{children}</section>
	);
}
