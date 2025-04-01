import { CiCirclePlus } from "react-icons/ci";

export default function DinerItem({ onClick, item, ...rest }) {
	const ingredients = item.ingredients.join(", ");

	return (
		<section className="item-section">
			<div className="extra-large-text">{item.icon}</div>
			<div className="item-details">
				<h3 className="extra-large-text">{item.name}</h3>
				<p className="medium-text">{ingredients}</p>
				<p className="large-text">{`$${item.price}`}</p>
			</div>
			<div>
				<button onClick={() => onClick(item)} className="add-button">
					<CiCirclePlus className="circle-plus-icon" />
				</button>
			</div>
		</section>
	);
}
