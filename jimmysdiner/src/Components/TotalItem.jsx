export default function TotalItem({ item, quantity, ...rest }) {
	return (
		<section className="total-item-section">
			<p>{item.name}</p>
			<div className="remove-button-div">
				<button className="remove-button">remove</button>
			</div>

			<p className="medium-text">{`x ${quantity}`}</p>
			<p>{`$${item.price}`}</p>
		</section>
	);
}
