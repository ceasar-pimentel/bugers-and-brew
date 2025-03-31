import { createServer, Model } from "miragejs";

const model = {
	items: Model,
};

function seed(server) {
	server.create("item", {
		id: "1",
		name: "Pizza",
		icon: "🍕",
		ingredients: ["pepperoni", "mushroom", "mozzarella"],
		price: 14,
	});
	server.create("item", {
		id: "2",
		name: "burger",
		icon: "🍔",
		ingredients: ["beef", "lettuce", "cheese"],
		price: 12,
	});
	server.create("item", {
		id: "3",
		name: "beer",
		icon: "🍺",
		ingredients: ["grains", "hops", "water"],
		price: 12,
	});
	server.create("item", {
		id: "4",
		name: "hot dog",
		icon: "🌭",
		ingredients: ["buns", "ketchup", "mustard"],
		price: 8,
	});
	server.create("item", {
		id: "5",
		name: "french fries",
		icon: "🍟",
		ingredients: ["potato", "salt"],
		price: 5,
	});
	server.create("item", {
		id: "6",
		name: "salad",
		icon: "🥙",
		ingredients: ["lettuce", "tomatoes", "red onion"],
		price: 7,
	});
}

function routes() {
	this.namespace = "/api";

	this.get("/items", (schema, request) => {
		return schema.items.all();
	});

	this.get("/items/:id", (schema, request) => {
		const id = request.params.id;
		return schema.items.find(id);
	});
}

createServer({ models: { item: Model }, seeds: seed, routes: routes });
