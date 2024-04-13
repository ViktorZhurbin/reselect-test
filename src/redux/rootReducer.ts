import { combineReducers } from "redux";

import { reducer as itemsReducer, ItemsState } from "./items/slice";
import { reducer as usersReducer, UsersState } from "./users/slice";

export type RootState = {
	items: ItemsState;
	users: UsersState;
};

const rootReducer = combineReducers({
	items: itemsReducer,
	users: usersReducer,
});

export default rootReducer;
