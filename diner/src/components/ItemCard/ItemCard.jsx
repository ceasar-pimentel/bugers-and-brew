import styles from "./ItemCard.module.css";
import Button from "../Button/Button";
import ButtonFilled from "../Button/ButtonFilled";

export default function ItemCard({ className }) {
	return (
		<section
			className={`${styles["section-card"]} ${className ? className : ""}`}
		>
			<img
				className={styles["image"]}
				src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=300&h=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
			<div className={styles["info-div"]}>
				<h1 className={styles["title"]}>Best Burger</h1>
				<p className={styles["description"]}>
					a quarter pound patty 100% wagyu with gruyere
				</p>
				<p className={styles["info-details"]}>$11.00 &middot; 700 cals</p>
				<Button className={styles["custom-btn"]}>Customize</Button>
				<ButtonFilled className={styles["add-btn"]}>Add To Bag</ButtonFilled>
			</div>
		</section>
	);
}
