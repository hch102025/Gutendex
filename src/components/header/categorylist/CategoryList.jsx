// Imports -------------------------------------------------------------------------
import { Link } from "react-router-dom";
import { categories } from "../../../constants/categoryArray";
import styles from "./CategoryList.module.css";
// ---------------------------------------------------------------------------------
function CategoryList() {
	return (
		<nav>
			<ul className={styles.container}>
				{categories.map((category) => {
					return (
						// Displays the categories one by one and reloads the page when link is clicked
						<Link
							to={`/category/${category}`}
							reloadDocument
							key={crypto.randomUUID()}>
							<li className={styles.list}>{category}</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
}

export default CategoryList;
