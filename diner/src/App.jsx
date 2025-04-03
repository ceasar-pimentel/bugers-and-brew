import React from "react";
import "./App.css";
import DinerItem from "./Components/DinerItem";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import PaymentCard from "./Components/PaymentCard";

function App() {
	const [items, setItems] = React.useState();
	const [cart, setCart] = React.useState({});
	const [showPayment, setShowPayment] = React.useState(() => false);

	function onAddToCard(item) {
		setCart((prevCart) => {
			if (!Object.keys(prevCart).includes(item.name)) {
				return { ...prevCart, [item.name]: [item] };
			}
			return { ...prevCart, [item.name]: [...prevCart[item.name], item] };
		});
	}

	function onClickCompleteOrder() {
		console.log("showPayment");
		setShowPayment((prev) => !prev);
	}

	function onClickRemove() {}

	console.log(cart);

	React.useEffect(() => {
		fetch("/api/items")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItems(data.items);
			});
	}, []);

	const itemElements = items
		? items.map((item) => {
				return <DinerItem onClick={onAddToCard} key={item.id} item={item} />;
		  })
		: null;

	return (
		<>
			<Header />
			<Main>{itemElements}</Main>
			{Object.keys(cart).length > 0 ? (
				<Footer
					items={cart}
					onClickComplete={onClickCompleteOrder}
					onClickRemove={onClickRemove}
				/>
			) : undefined}
			{showPayment ? <PaymentCard /> : undefined}
		</>
	);
}

export default App;
