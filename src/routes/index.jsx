// imports ------------------------------------------------------------------------------
import { createHashRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/homepage/HomePage.jsx";
import CategoryPage from "../pages/categorypage/CategoryPage.jsx";
import BookDetailsPage from "../pages/bookdetailpage/BookDetailPage.jsx";
import SearchPage from "../pages/searchpage/SearchPage.jsx";

// --------------------------------------------------------------------------------------

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "/category/:category", element: <CategoryPage /> },
			{ path: "/books/:id", element: <BookDetailsPage /> },
			{ path: "/search", element: <SearchPage /> },
		],
	},
	{ path: "*", element: <h1>404 - Page Not Found</h1> },
]);

export { router };
