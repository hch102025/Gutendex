// Imports -------------------------------------------------------------
import Favorite from "../favorite/Favorite";
import styles from "./Details.module.css";
// ----------------------------------------------------------

function Details({
	data: { title, formats, authors, bookshelves, languages, download_count, id },
}) {
	return (
		<article className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.book}>
				<img src={formats["image/jpeg"]} alt={title} className={styles.image} />
				<div className={styles.info}>
					<div>
						<h2 className="info-title">Author</h2>
						{authors.map((author) => {
							return (
								<>
									<h3>{author.name}</h3>
								</>
							);
						})}
					</div>

					<div>
						<h2>Downloads</h2>
						<h3>{download_count}</h3>
					</div>

					<div>
						<h2>Category</h2>
						<div className={styles.categories}>
							{bookshelves.map((category) => {
								return (
									<>
										<h3 className={styles.category}>{category}</h3>
									</>
								);
							})}
						</div>
					</div>
					<div>
						<h2>Languages</h2>
						{languages.map((language) => {
							return (
								<>
									<h3>{language}</h3>
								</>
							);
						})}
					</div>
					<div>
						<h2>Link</h2>
						<a href={formats["text/html"]} className={styles.link}>
							Digital Book Version
						</a>
					</div>
				</div>
			</div>
			<div className={styles.favorite}>
				<Favorite id={id} />
			</div>
		</article>
	);
}

export default Details;
