// Imports -------------------------------------------------------
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { apiUrl } from "../../constants/api";
import BookCard from "../bookcard/BookCard";
import styles from "./searchedbooks.module.css";
// -----------------------------------------------------

function SearchedBooks() {
	// useState for books, loading as well as page handling
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [next, setNext] = useState(null);
	const [prev, setPrev] = useState(null);

	// Returns a location
	const location = useLocation();

	// gets the url that was created in the search field through navigate
	const searchResult = new URLSearchParams(location.search).get("q");

	useEffect(() => {
		async function getSearchedBook() {
			try {
				// Gets the page and search result from the API
				await axios
					.get(`${apiUrl}?page=${page}&search=${searchResult}`)
					.then((res) => {
						setBooks(res.data.results);

						// Gets the next and previous pages
						setNext(res.data.next);
						setPrev(res.data.previous);
					});
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		}
		// Runs the function
		getSearchedBook();
	}, [searchResult, page]);

	if (isLoading) return <h2>Loading {searchResult}......</h2>;

	return (
		<>
			<div className={styles.pagination}>
				{/* decreases the page value and disables the button if value is 0/have no previous page */}
				<button onClick={() => setPage((page) => page - 1)} disabled={!prev}>
					Previous
				</button>
				<span>Page: {page}</span>

				{/* Increases the page value and disables the button if the value is higher than the amount of pages available. */}
				<button onClick={() => setPage((page) => page + 1)} disabled={!next}>
					Next
				</button>
			</div>

			<div className="books">
				{books.map((book) => {
					return <BookCard data={book} key={book.id} />;
				})}
			</div>
		</>
	);
}

export default SearchedBooks;
