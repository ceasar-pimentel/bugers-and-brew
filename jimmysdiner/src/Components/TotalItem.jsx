export default function TotalItem({ item, ...rest }) {
	return (
		<section className="total-item-section">
			<p>{item.name}</p>
			<div className="remove-button-div">
				<button className="remove-button">remove</button>
			</div>
			<p>{item.price}</p>
		</section>
	);
}
