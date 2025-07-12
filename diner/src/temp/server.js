import { createServer, Model } from "miragejs";

function seed(server) {
	seedItems(server);
	seedBeverages(server);
	seedDesserts(server);
	seedCarousel(server);
	seedLocations(server);
}

function seedBeverages(server) {
	server.create("item", {
		id: 1,
		calories: "",
		description: "Jarritos mexican soda",
		flavor: "Cola",
		imgUrl:
			"https://images.unsplash.com/photo-1613520422291-acaf1391c31e?q=80&w=300&H=300&auto=format&fit=crop",
		name: "Jarritos  mexican soda",
		price: 7,
		type: "beverage",
	});
	server.create("item", {
		id: 2,
		calories: "",
		description: "Jarritos mexican soda",
		flavor: "mango",
		imgUrl:
			"https://images.unsplash.com/photo-1613520422291-acaf1391c31e?q=80&w=300&H=300&auto=format&fit=crop",
		name: "Jarritos  mexican soda",
		price: 7,
		type: "beverage",
	});
	server.create("item", {
		id: 3,
		calories: "",
		description: "Jarritos mexican soda",
		flavor: "tamarind",
		imgUrl:
			"https://images.unsplash.com/photo-1613520422291-acaf1391c31e?q=80&w=300&H=300&auto=format&fit=crop",
		name: "Jarritos  mexican soda",
		price: 7,
		type: "beverage",
	});
}

function seedDesserts(server) {
	server.create("item", {
		id: "4",
		calories: "",
		description: "yummy delicious float",
		flavor: "pineapple",
		imgUrl:
			"https://images.unsplash.com/photo-1628200558926-463e8390113d?q=80&w=300&h=300&auto=format&fit=scale",
		name: "Jarritos Pineapple Float",
		price: 10,
		type: "dessert",
	});

	server.create("item", {
		id: "5",
		calories: "",
		description: "yummy delicious float",
		flavor: "orange",
		imgUrl:
			"https://images.unsplash.com/photo-1628200558926-463e8390113d?q=80&w=300&h=300&auto=format&fit=scale",
		name: "Jarritos Guava Float",
		price: 10,
		type: "dessert",
	});

	server.create("item", {
		id: "6",
		calories: "",
		description: "yummy delicious float",
		flavor: "mango",
		imgUrl:
			"https://images.unsplash.com/photo-1628200558926-463e8390113d?q=80&w=300&h=300&auto=format&fit=scale",
		name: "Jarritos Mango Float",
		price: 10,
		type: "dessert",
	});

	server.create("item", {
		id: "7",
		calories: "",
		description: "delicious ice cream sundae",
		imgUrl:
			"https://images.unsplash.com/photo-1708782343454-5d66dda6e107?q=80&w=300&h=300&auto=format&fit=crop",
		name: "Ice Cream Sundae",
		price: 12,
		type: "dessert",
	});
}

function seedItems(server) {
	server.create("item", {
		id: "8",
		calories: "800",
		description:
			"Juicy double cheese burger with cheese and our house made sauce",
		imgUrl:
			"https://images.unsplash.com/photo-1713330801172-03f8d1c0dde7?w=280&h=230&fit=crop&auto=format&q=80&crop=entropy",
		ingredients: [
			{ name: "buns", included: true, include: true, optional: false },
			{ name: "beef patty", included: true, include: true, optional: false },
			{ name: "lettuce", included: true, include: true, optional: true },
			{ name: "tomato", included: true, include: true, optional: true },
			{ name: "cheese", included: true, include: true, optional: true },
			{ name: "pickle", included: true, include: true, optional: true },
		],
		name: "Double Cheese Burger",
		price: 14,
		type: "burger",
	});

	server.create("item", {
		id: "9",
		calories: "789",
		description: "Mushroom burger with monterey jack cheese and mushrooms",
		imgUrl:
			"https://images.unsplash.com/photo-1549611016-3a70d82b5040?q=80&w=300&h=300&auto=format&fit=crop",
		ingredients: [
			{ name: "buns", included: true, include: true, optional: false },
			{ name: "beef patty", included: true, include: true, optional: false },
			{ name: "lettuce", included: true, include: true, optional: true },
			{ name: "tomato", included: true, include: true, optional: true },
			{ name: "cheese", included: true, include: true, optional: true },
			{ name: "mushrooms", included: true, include: true, optional: true },
		],
		name: "shroom-boom burger",
		price: 14,
		type: "burger",
	});

	server.create("item", {
		id: "10",
		calories: "",
		description:
			"Who doesn't love breakfast for lunch! A burger filled with breakfast",
		imgUrl:
			"https://images.unsplash.com/photo-1559067933-0293effe6133?q=80&w=300&h=300&auto=format&fit=crop",
		ingredients: [
			{ name: "buns", included: true, include: true, optional: false },
			{ name: "beef patty", included: true, include: true, optional: false },
			{ name: "bacon", included: true, include: true, optional: true },
			{ name: "lettuce", included: true, include: true, optional: true },
			{ name: "tomato", included: true, include: true, optional: true },
			{ name: "cheese", included: true, include: true, optional: true },
		],
		name: "Good Morning Burger",
		price: 14,
		type: "burger",
	});

	server.create("item", {
		id: "11",
		calories: "",
		description: "Here is a burger that is guaranteed to get you groove'n",
		imgUrl:
			"https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?q=80&w=300&h=300&auto=format&fit=crop",
		ingredients: [
			{ name: "buns", included: true, include: true, optional: false },
			{ name: "beef patty", included: true, include: true, optional: false },
			{ name: "lettuce", included: true, include: true, optional: true },
			{ name: "tomato", included: true, include: true, optional: true },
			{ name: "cheese", included: true, include: true, optional: true },
			{ name: "bacon", included: true, include: true, optional: true },
			{ name: "pickles", included: true, include: true, optional: true },
		],
		name: "Shaken My Bacon Burger",
		price: 14,
		type: "burger",
	});

	server.create("item", {
		id: "12",
		calories: "450",
		description:
			"Hot and crispy delicious sweet potato fries. A little sweet a little salty, the perfect combination",
		imgUrl:
			"https://images.unsplash.com/photo-1529589510304-b7e994a92f60?q=80&w=300&h=300&auto=format&fit=crop",
		ingredients: [
			{
				name: "sweet potatoes",
				included: true,
				include: true,
				optional: false,
			},
			{ name: "seasoning", included: true, include: true },
		],
		name: "Sweet Potato Fries",
		price: 14,
		type: "side",
	});

	server.create("item", {
		id: "13",
		calories: "600",
		description: "Who doesn't love a good ol classic Onion rings!",
		imgUrl:
			"https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=300&h=300&auto=format&fit=crop",
		ingredients: [
			{ name: "onions", included: true, include: true, optional: false },
			{ name: "flour", included: true, include: true, optional: false },
			{ name: "eggs", included: true, include: true, optional: false },
			{ name: "seasoning", included: true, include: true },
		],
		name: "Onion Rings",
		price: 14,
		type: "side",
	});

	server.create("item", {
		id: "14",
		calories: "600",
		description:
			"Potato wedges loaded with sour cream bacon and our house seasoning",
		imgUrl:
			"https://images.unsplash.com/photo-1650939986300-ce9609921fa7?q=80&w=300&h=300&auto=format&fit=crop",
		ingredients: [
			{ name: "potatoes", included: true, include: true, optional: false },
			{ name: "salt", included: true, include: true, optional: false },
			{ name: "pepper", included: true, include: true, optional: false },
			{ name: "sour cream", included: true, include: true },
			{ name: "bacon", included: true, include: true },
		],
		name: "Loaded potato wedges",
		price: 14,
		type: "side",
	});

	server.create("item", {
		id: "15",
		calories: "440",
		description: "yummy french fries",
		imgUrl:
			"https://images.unsplash.com/photo-1684815495679-f6e6bc0634ec?q=80&w=300&h=300&auto=format&fit=crop",
		ingredients: [
			{ name: "potatoes", included: true, include: true, optional: false },
			{ name: "salt", included: true, include: true, optional: true },
			{ name: "pepper", included: true, include: true, optional: true },
		],
		name: "French fries",
		price: 14,
		type: "side",
	});

	server.create("item", {
		id: "16",
		calories: "550",
		description: "Garlicky cheesy fries what's not to love!",
		imgUrl:
			"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=300&h=300&auto=format&fit=crop",
		ingredients: [
			{ name: "potatoes", included: true, include: true, optional: false },
			{ name: "salt", included: true, include: true, optional: false },
			{ name: "pepper", included: true, include: true, optional: false },
			{ name: "garlic", included: true, include: true, optional: false },
			{
				name: "parmesan cheese",
				included: true,
				include: true,
				optional: false,
			},
		],
		name: "Garlic cheese fries",
		price: 14,
		type: "side",
	});

	server.create("item", {
		id: "17",
		calories: "800",
		description:
			"Crispy fried chicken wings tossed in our house made buffalo sauce.",
		imgUrl:
			"https://images.unsplash.com/photo-1571162437205-8889ff2fee26?q=80&w=300&h=300&auto=format&fit=crop",
		name: "Buffalo Wings",
		price: 14,
		type: "other",
	});

	server.create("item", {
		id: "18",
		calories: "750",
		description: "take me out the ball game and buy me a hotdog",
		imgUrl:
			"https://images.unsplash.com/photo-1638368593249-7cadb261e8b3?q=80&w=300&h=300&auto=format&fit=crop",
		name: "Hot Diggity Dog",
		price: 14,
		type: "other",
	});
}

function seedCarousel(server) {
	server.create("carousel", {
		id: 1,
		imgUrl:
			"https://images.unsplash.com/photo-1534946506758-3e3f457d2445?q=80&w=1000&h=300&auto=format&fit=crop&crop=entropy&gravity=south",
	});

	server.create("carousel", {
		id: 2,
		imgUrl:
			"https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?q=80&w=1000&h=300&auto=format&fit=crop&crop=entropy",
	});
}

function seedLocations(server) {
	server.create("location", {
		id: 1,
		street: "1234 I want job st.",
		city: "Software",
		phone: "(234) 567-8903",
	});

	server.create("location", {
		id: 2,
		street: "124 React dr",
		city: "Engineer",
		phone: "(245) 324-2345",
	});
}

function routes() {
	this.namespace = "/api";

	this.get("/items", (schema, request) => {
		const itemType = request.queryParams.type;

		if (itemType) {
			return schema.items.where({ type: itemType });
		}

		return schema.items.all();
	});

	this.get("/items/:id", (schema, request) => {
		const id = request.params.id;
		return schema.items.find(id);
	});

	this.get("/carousel", (schema, request) => {
		return schema.carousels.all();
	});

	this.get("/locations", (schema, request) => {
		return schema.locations.all();
	});
}

export default createServer({
	models: { item: Model, carousel: Model, location: Model },
	seeds: seed,
	routes: routes,
});
