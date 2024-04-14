import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import {
	createDeepEqualSelector,
	createDeepEqualResultSelector,
	createShallowEqualResultSelector,
	createShallowEqualSelector,
} from "../../lib/reselect";
import { getPartialUsersMap, getUsersWithoutModifiedField } from "./helpers";

export const selectUsersMap = (state: RootState) => state.users.usersMap;

// USER IDS
export const selectUserIds = createSelector([selectUsersMap], (usersMap) =>
	Object.keys(usersMap)
);
export const selectUserIds__shallowEqualResult =
	createShallowEqualResultSelector([selectUsersMap], (usersMap) =>
		Object.keys(usersMap)
	);

// PARTIAL USERS

export const selectPartialUsers = createSelector(
	[selectUsersMap],
	getUsersWithoutModifiedField
);

export const selectPartialUsers__deepEqualResult =
	createDeepEqualResultSelector([selectUsersMap], getUsersWithoutModifiedField);

export const selectPartialUsers__deepEqual = createDeepEqualSelector(
	[selectUsersMap],
	getUsersWithoutModifiedField
);

export const selectPartialUsers__shallowEqualResult =
	createShallowEqualResultSelector(
		[selectUsersMap],
		getUsersWithoutModifiedField
	);

export const selectPartialUsers__shallowEqual = createShallowEqualSelector(
	[selectUsersMap],
	getUsersWithoutModifiedField
);

// PARTIAL USERS MAP
export const selectPartialUsersMap = createSelector(
	[selectUsersMap],
	getPartialUsersMap
);

export const selectPartialUsersMap__deepEqualResult =
	createDeepEqualResultSelector([selectUsersMap], getPartialUsersMap);

export const selectPartialUsersMap__deepEqual = createDeepEqualSelector(
	[selectUsersMap],
	getPartialUsersMap
);

export const selectPartialUsersMap__shallowEqualResult =
	createShallowEqualResultSelector([selectUsersMap], getPartialUsersMap);

export const selectPartialUsersMap__shallowEqual = createShallowEqualSelector(
	[selectUsersMap],
	getPartialUsersMap
);
