// Imports ----------------------------------------------------------------
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../constants/api";
import axios from "axios";
import Details from "./Details";
// --------------------------------------------------------------------------

function BookDetails() {
	// useState for storiing book and loading values
	const [book, setBook] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// // Gets the :id param from the router
	const { id } = useParams();

	useEffect(() => {
		async function getBookId() {
			try {
				// Gets the book ids from the API
				await axios.get(`${apiUrl}?ids=${id}`).then((res) => {
					setBook(res.data.results);
				});
			} catch (err) {
				console.log(err);
			} finally {
				setIsLoading(false);
			}
		}
		// Runs the function
		getBookId();
	}, [id]);

	if (isLoading) return <h2>Loading Details....</h2>;

	return (
		<article>
			{book.map((detail) => {
				return <Details data={detail} key={detail.id} />;
			})}
		</article>
	);
}

export default BookDetails;
