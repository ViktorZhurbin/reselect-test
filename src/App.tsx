import { Provider } from "react-redux";

import { store } from "./redux/rootReducer.ts";
import { UsersPage } from "./components/UsersPage/UsersPage.tsx";

export const App = () => {
	return (
		<Provider store={store}>
			<UsersPage />
		</Provider>
	);
};
