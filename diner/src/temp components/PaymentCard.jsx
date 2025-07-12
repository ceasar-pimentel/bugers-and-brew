export default function PaymentCard() {
	return (
		<form className="payment-card">
			<h3 className="extra-large-text">Enter card details</h3>
			<input
				className="payment-input"
				placeholder="Enter your fake name"
				type="text"
				required
			></input>
			<input
				className="payment-input"
				placeholder="Enter your fake card number"
				type="text"
				inputMode="numerical"
				required
			></input>
			<input
				className="payment-input"
				placeholder="Enter your fake cvv"
				type="text"
				inputMode="numerical"
				required
			></input>
			<button className="payment-button extra-large-text">Pay</button>
		</form>
	);
}
