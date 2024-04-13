import {
	lruMemoize,
	createSelector,
	createSelectorCreator,
} from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { shallowEqual } from "react-redux";
import { isEqual } from "lodash";
import { UsersState } from "./slice";

const createShallowEqualResultSelector = createSelectorCreator(lruMemoize, {
	resultEqualityCheck: shallowEqual,
});
const createShallowEqualSelector = createSelectorCreator(lruMemoize, {
	equalityCheck: shallowEqual,
	resultEqualityCheck: shallowEqual,
});

const createDeepEqualResultSelector = createSelectorCreator(lruMemoize, {
	resultEqualityCheck: isEqual,
});

const createDeepEqualSelector = createSelectorCreator(lruMemoize, {
	equalityCheck: isEqual,
	resultEqualityCheck: isEqual,
});

const selectUsersMap = (state: RootState) => state.users.usersMap;

export const selectUserIds = createSelector([selectUsersMap], (usersMap) =>
	Object.keys(usersMap)
);

export const selectUserIds__shallowEqualResult =
	createShallowEqualResultSelector([selectUsersMap], (usersMap) =>
		Object.keys(usersMap)
	);

const getUsersWithoutModifiedField = (usersMap: UsersState["usersMap"]) =>
	Object.values(usersMap).map(({ isModified, ...restUser }) => restUser);

export const selectPartialUsers = createSelector(
	[selectUsersMap],
	getUsersWithoutModifiedField
);

export const selectPartialUsers__shallowEqualResult =
	createShallowEqualResultSelector([selectUsersMap], (usersMap) =>
		Object.values(usersMap).filter((user) => !user.isPumbleBot)
	);

export const selectPartialUsers__shallowEqual = createShallowEqualSelector(
	[selectUsersMap],
	getUsersWithoutModifiedField
);

export const selectPartialUsers__deepEqualResult =
	createDeepEqualResultSelector([selectUsersMap], getUsersWithoutModifiedField);

export const selectPartialUsers__deepEqual = createDeepEqualSelector(
	[selectUsersMap],
	getUsersWithoutModifiedField
);

// PARTIAL USERS MAP
const getPartialUsersMap = (usersMap: UsersState["usersMap"]) => {
	return Object.fromEntries(
		Object.entries(usersMap).map(([id, user]) => {
			const partialUser = {
				avatar: user.avatar,
				email: user.email,
			};

			return [id, partialUser];
		})
	);
};
export const selectPartialUsersMap = createSelector(
	[selectUsersMap],
	getPartialUsersMap
);

export const selectPartialUsersMap__shallowEqualResult =
	createShallowEqualResultSelector([selectUsersMap], getPartialUsersMap);

export const selectPartialUsersMap__shallowEqual = createShallowEqualSelector(
	[selectUsersMap],
	getPartialUsersMap
);

export const selectPartialUsersMap__deepEqualResult =
	createDeepEqualResultSelector([selectUsersMap], getPartialUsersMap);

export const selectPartialUsersMap__deepEqual = createDeepEqualSelector(
	[selectUsersMap],
	getPartialUsersMap
);
