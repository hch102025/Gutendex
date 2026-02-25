// Imports ------------------------------------------------------------------
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// --------------------------------------------------------------------------

function SearchField() {
	// useState to store search value
	const [search, setSearch] = useState("");

	// Value to help navigate when an event is triggered
	const navigate = useNavigate();

	// Stops the page from reloading, navigates to a search page and empties out the search field.
	function handleSearch(event) {
		//  Stops reload
		event.preventDefault();

		// Trims whitespace from the search
		if (search.trim()) {
			// Replaces spaces with 20%
			navigate(`search?q=${encodeURIComponent(search)}`);
			setSearch("");
		}
	}

	return (
		<form onSubmit={handleSearch}>
			<input
				type="text"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
			<button type="submit">Search</button>
		</form>
	);
}

export default SearchField;
