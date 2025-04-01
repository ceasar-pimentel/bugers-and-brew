import TotalItem from "./TotalItem";
export default function Footer({ items, ...rest }) {
	let total = 0;
	const totalItemElements = Object.keys(items).map((key) => {
		console.log(`${key} ${items[key].length}`);
		const item = items[key][0];
		total += items[key].length * Number(item.price);
		return <TotalItem item={item} quantity={items[key].length} />;
	});

	return (
		<footer className="footer">
			<h3>Your Order</h3>
			{totalItemElements}
			<button>Complete order</button>
			<div className="div-total">
				<p>Total</p>
				<p>{total}</p>
			</div>
		</footer>
	);
}
