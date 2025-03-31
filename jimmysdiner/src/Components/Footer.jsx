import TotalItem from "./TotalItem";
export default function Footer({ items, ...rest }) {
	console.log(items);
	const totalItemElements = items
		? items.map((item) => <TotalItem item={item} />)
		: [];
	return (
		<footer className="footer">
			<h3>Your Order</h3>
			{totalItemElements}
		</footer>
	);
}
