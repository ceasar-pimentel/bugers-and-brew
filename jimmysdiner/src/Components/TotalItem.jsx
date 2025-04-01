export default function TotalItem({ item, quantity, ...rest }) {
	return (
		<section className="total-item-section">
			<p className="extra-large-text">{item.name}</p>
			<div className="remove-button-div">
				<button className="remove-button">remove</button>
			</div>

			<p className="large-text">{`x ${quantity}`}</p>
			<p className="large-text">{`$${item.price}`}</p>
		</section>
	);
}
