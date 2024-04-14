import { combineReducers } from "redux";

import { reducer as itemsReducer, ItemsState } from "./items/slice";
import { reducer as usersReducer, UsersState } from "./users/slice";
import { configureStore } from "@reduxjs/toolkit";

export type RootState = {
	items: ItemsState;
	users: UsersState;
};

const rootReducer = combineReducers({
	items: itemsReducer,
	users: usersReducer,
});

const store = configureStore({ reducer: rootReducer });

export { store };
