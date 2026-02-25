// Imports -----------------------------------------------------------------
import { useState, useEffect } from "react";
// -------------------------------------------------------------------------

function Favorite({ id }) {
	// useState to store localStorage
	const [favorites, setFavorites] = useState(() => {
		const saved = localStorage.getItem("favorites");
		return saved ? JSON.parse(saved) : [];
	});

	// checks if it has an id
	const isFavorited = favorites.includes(id);

	// Gets the stored localStorage value that is inside the useState
	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	//  Filters out the book if already in favorites (unfavoring it). If not, add the book to favorites
	function toggleFavorites() {
		if (isFavorited) {
			setFavorites((prev) => prev.filter((favId) => favId !== id));
		} else {
			setFavorites((prev) => [...prev, id]);
		}
	}

	return (
		<button onClick={toggleFavorites}>
			{isFavorited ? "Unfavorite" : "Add to Favorite"}
		</button>
	);
}

export default Favorite;
