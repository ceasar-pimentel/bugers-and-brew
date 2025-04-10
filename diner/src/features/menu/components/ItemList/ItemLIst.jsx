import styles from "./ItemList.module.css";
import ItemCard from "../../../../components/ItemCard/ItemCard";

export default function ItemList() {
	console.log(styles["menu-section-grid"]);
	return (
		<section className={`${styles["menu-section-grid"]}`}>
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
			<ItemCard />
		</section>
	);
}
