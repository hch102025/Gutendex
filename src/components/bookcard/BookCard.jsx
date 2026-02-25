// Imports --------------------------------------------------------
import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";
// ----------------------------------------------------------------

function BookCard({ data: { title, formats, id } }) {
	return (
		// Links to the individual books
		<Link to={`/books/${id}`}>
			<article className={styles.container}>
				<h2 className={styles.title}>{title}</h2>
				<img src={formats["image/jpeg"]} alt={title} className={styles.image} />
			</article>
		</Link>
	);
}

export default BookCard;
