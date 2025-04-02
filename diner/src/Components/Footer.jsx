import TotalItem from "./TotalItem";
import React from "react";

export default function Footer({ items, onClickRemove, ...rest }) {
	const [showPayment, setShowPayment] = React.useState(() => false);

	function onClickCompleteOrder() {
		setShowPayment((prev) => !prev);
	}

	let total = 0;
	const totalItemElements = Object.keys(items).map((key) => {
		console.log(`${key} ${items[key].length}`);
		const item = items[key][0];
		total += items[key].length * Number(item.price);
		return (
			<TotalItem
				className="total-item"
				key={key}
				item={item}
				quantity={items[key].length}
			/>
		);
	});

	return (
		<footer className="footer">
			<h3>Your Order</h3>
			{totalItemElements}
			<div className="div-total large-text">
				<p className="extra-large-text">Total</p>
				<p className="large-text">{total}</p>
			</div>
			<button className="complete-order-btn" onClick={onClickCompleteOrder}>
				Complete order
			</button>
			{showPayment ? (
				<form className="payment-card">
					<h3 className="extra-large-text">Enter card details</h3>
					<input
						className="payment-input"
						placeholder="Enter your fake name"
						type="text"
					></input>
					<input
						className="payment-input"
						placeholder="Enter your fake card number"
						type="text"
						inputMode="numerical"
					></input>
					<input
						className="payment-input"
						placeholder="Enter your fake cvv"
						type="text"
						inputMode="numerical"
					></input>
					<button className="payment-button extra-large-text">Pay</button>
				</form>
			) : undefined}
		</footer>
	);
}
