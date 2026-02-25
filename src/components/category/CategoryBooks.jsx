// Imports -----------------------------------------------------------
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import { useParams } from "react-router-dom";
import BookCard from "../bookcard/BookCard";
import styles from "./CategoryBooks.module.css";
// -----------------------------------------------------------------------

function CategoryBooks() {
	// useStates for book and loading value
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// Gets the :category param from the router
	const { category } = useParams();

	useEffect(() => {
		async function getCategory() {
			try {
				// Gets the categories within the topic from the API
				await axios.get(`${apiUrl}?topic=${category}`).then((res) => {
					setBooks(res.data.results);
				});
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		}

		// Runs the function
		getCategory();
	}, [category]);

	if (isLoading) return <h2>Loading Category: {category}...</h2>;

	return (
		<>
			<h2 className={styles.title}>{category}</h2>
			<div className="books">
				{books.map((book) => {
					return <BookCard data={book} key={book.id} />;
				})}
			</div>
		</>
	);
}

export default CategoryBooks;
