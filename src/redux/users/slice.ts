import { createSlice } from "@reduxjs/toolkit";
import { User, getMockUsersMap } from "./mocks";
import { USERS_COUNT } from "../../constants/users";

export type UsersState = {
	usersMap: Record<string, User>;
};

export const initialState: UsersState = {
	usersMap: getMockUsersMap({ count: USERS_COUNT }),
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		updateRandomUserName: (state) => {
			const randomIndex = Math.ceil(Math.random() * USERS_COUNT);
			const ids = Object.keys(state.usersMap);

			const randomId = ids[randomIndex];
			const randomUser = state.usersMap[randomId];

			if (randomUser) {
				randomUser.isModified = true;
			}
		},
	},
});

export const { reducer } = usersSlice;
export const { updateRandomUserName } = usersSlice.actions;
