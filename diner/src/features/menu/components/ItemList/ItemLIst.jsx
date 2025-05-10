import styles from "./ItemList.module.css";
import ItemCard from "../../../../components/ItemCard/ItemCard";

export default function ItemList({ children }) {
	return (
		<section className={`${styles["menu-section-grid"]}`}>{children}</section>
	);
}
