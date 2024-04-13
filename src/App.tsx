import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./redux/rootReducer.ts";
import { UsersPage } from "./components/UsersPage/UsersPage.tsx";

const store = configureStore({ reducer: rootReducer });

export const App = () => {
	return (
		<Provider store={store}>
			<UsersPage />
		</Provider>
	);
};
