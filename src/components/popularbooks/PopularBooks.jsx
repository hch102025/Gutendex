// Imports ---------------------------------------------------------
import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../bookcard/BookCard";
import { apiUrl } from "../../constants/api";
// -----------------------------------------------------------------

function PopularBooks() {
	// useStates to store the books, loading and error values
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function getBooks() {
			try {
				// Gets the book results from the API
				await axios.get(apiUrl).then((res) => {
					setBooks(res.data.results);
				});
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		}
		// Runs the function
		getBooks();
	});

	if (isLoading) return <h2>Loading Popular.....</h2>;

	return (
		<>
			<h2>Popular</h2>
			<div className="books">
				{books.map((book) => {
					return <BookCard data={book} key={book.id} />;
				})}
			</div>
		</>
	);
}

export default PopularBooks;
