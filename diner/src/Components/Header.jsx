import burger from "../assets/bgimg.svg";
console.log(burger);
export default function Header() {
	return (
		<div
			className="header"
			style={{
				backgroundImage: `url(${burger})`,
				height: "167px",
				width: "100%",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="title">
				<h1 className="extra-large-text title-name">Jimmer's Diner</h1>
				<h2 className="medium-text">The best burgers and pizza's in town</h2>
			</div>
		</div>
	);
}
