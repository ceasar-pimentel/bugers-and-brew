import { useEffect } from "react";
import ItemList from "../../features/menu/components/ItemList/ItemList.jsx";
import React from "react";
import ItemCard from "../../components/ItemCard/ItemCard";

export default function MenuSection({ type }) {
	// here we can fetch the data and then map. for now we can do this. at some point i want to create a data layer
	const [items, setItems] = React.useState(() => []);

	useEffect(() => {
		fetch(`/api/items?type=${type}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				return setItems(data.items);
			});
	}, [type]);

	const itemElements = items.map((item) => {
		return <ItemCard key={item.id} item={item} />;
	});

	return <ItemList>{itemElements}</ItemList>;
}
