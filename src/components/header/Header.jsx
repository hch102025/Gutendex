// Imports -------------------------------------------------------------------------------
import CategoryList from "./categorylist/CategoryList";
import SearchField from "./search/SearchField.jsx";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// ---------------------------------------------------------------------------------------

function Header() {
	return (
		<div className={styles.container}>
			<Link>
				<h1 className={styles.title}>Gutendex</h1>
			</Link>
			<SearchField />
			<CategoryList />
		</div>
	);
}

export default Header;
