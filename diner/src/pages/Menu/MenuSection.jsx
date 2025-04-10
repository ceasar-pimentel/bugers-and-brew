export default function MenuSection({ url }) {
	// here we can fetch the data and then map. for now we can do this. at some point i want to create a data layer
	fetch(url);

	return <ItemList></ItemList>;
}
