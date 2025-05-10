import styles from "./ItemCard.module.css";
import Button from "../Button/Button";
import ButtonFilled from "../Button/ButtonFilled";

export default function ItemCard({ item, className }) {
	return (
		<section
			className={`${styles["section-card"]} ${className ? className : ""}`}
		>
			<img className={styles["image"]} src={item.imgUrl} />
			<div className={styles["info-div"]}>
				<h1 className={styles["title"]}>{item.name}</h1>
				<p className={styles["description"]}>{item.description}</p>
				<p className={styles["info-details"]}>
					{`$${item.price}.00`} &middot; {`${item.calories} calories`}
				</p>
				<Button className={styles["custom-btn"]}>Customize</Button>
				<ButtonFilled className={styles["add-btn"]}>Add To Bag</ButtonFilled>
			</div>
		</section>
	);
}
