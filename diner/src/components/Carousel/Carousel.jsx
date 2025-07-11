import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowRightWideLine } from "react-icons/ri";
export default function Carousel() {
	const [index, setIndex] = React.useState(0);
	const [items, setItems] = React.useState();
	React.useEffect(() => {
		console.log("call api");
		fetch("/api/carousel")
			.then((res) => res.json())
			.then((data) => {
				setItems(data.carousels);
			});
	}, []);
	console.log(items);

	const prevSlide = () => {
		setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
	};

	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "100%",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					display: "flex",
					transition: "transform 0.3s ease-in-out",
					transform: `translateX(-${index * 100}%)`,
					height: "100%",
				}}
			>
				{items?.map((item, i) => (
					<div
						key={i}
						style={{
							minWidth: "100%",
							height: "100%",
							background: `url("${item.imgUrl}")`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					/>
				))}
			</div>

			<IoIosArrowBack
				onClick={prevSlide}
				style={{
					position: "absolute",
					left: 0,
					bottom: 0,
					zIndex: 1000,
					fill: "whitesmoke",
					background: "none",
				}}
			/>
			<IoIosArrowForward
				onClick={nextSlide}
				style={{
					position: "absolute",
					right: 0,
					bottom: 0,
					zIndex: 1000,
					fill: "whitesmoke",
					background: "none",
				}}
			/>
		</div>
	);
}
