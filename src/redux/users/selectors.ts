import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { UsersState } from "./slice";
import {
	selectors,
	deepEqualMap,
	deepEqualSelectors,
	createDeepEqualSelector,
	createDeepEqualResultSelector,
} from "../lib";

const selectUsersMap = (state: RootState) => state.users.usersMap;

// USER IDS
export const selectUserIds = createSelector([selectUsersMap], (usersMap) =>
	Object.keys(usersMap)
);

export const selectUserIds__shallowEqualResult =
	selectors.shallowEqualResult.reactRedux([selectUsersMap], (usersMap) =>
		Object.keys(usersMap)
	);

// PARTIAL USERS
const getUsersWithoutModifiedField = (usersMap: UsersState["usersMap"]) =>
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	Object.values(usersMap).map(({ isModified, ...restUser }) => restUser);

export const selectPartialUsers = createSelector(
	[selectUsersMap],
	getUsersWithoutModifiedField
);

export const selectPartialUsers__shallowEqualResult =
	selectors.shallowEqualResult.reactRedux(
		[selectUsersMap],
		getUsersWithoutModifiedField
	);

export const selectPartialUsers__shallowEqual =
	selectors.shallowEqual.reactRedux(
		[selectUsersMap],
		getUsersWithoutModifiedField
	);

export const selectPartialUsers__deepEqualResult =
	selectors.deepEqualResult.lodash(
		[selectUsersMap],
		getUsersWithoutModifiedField
	);

export const selectPartialUsers__deepEqual =
	deepEqualSelectors.lodashIsEqual.createSelector(
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
	selectors.shallowEqualResult.reactRedux([selectUsersMap], getPartialUsersMap);

export const selectPartialUsersMap__shallowEqual =
	selectors.shallowEqual.reactRedux([selectUsersMap], getPartialUsersMap);

export const selectPartialUsersMap__deepEqualResult =
	selectors.deepEqualResult.lodash([selectUsersMap], getPartialUsersMap);

export const selectPartialUsersMap__deepEqual =
	deepEqualSelectors.lodashIsEqual.createSelector(
		[selectUsersMap],
		getPartialUsersMap
	);

const partialUsersMapDeepEqual = deepEqualMap.reduce<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Record<string, { libName: string; selector: any }>
>((acc, { libName, equalityFn }) => {
	const createSelector = createDeepEqualSelector(equalityFn);
	const selector = createSelector([selectUsersMap], getPartialUsersMap);

	acc[libName] = { libName, selector };

	return acc;
}, {});

const partialUsersMapDeepEqualResult = deepEqualMap.reduce<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Record<string, { libName: string; selector: any }>
>((acc, { libName, equalityFn }) => {
	const createSelector = createDeepEqualResultSelector(equalityFn);
	const selector = createSelector(
		[selectUsersMap],
		getUsersWithoutModifiedField
	);

	acc[libName] = { libName, selector };

	return acc;
}, {});

const partialUsersDeepEqual = deepEqualMap.reduce<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Record<string, { libName: string; selector: any }>
>((acc, { libName, equalityFn }) => {
	const createSelector = createDeepEqualSelector(equalityFn);
	const selector = createSelector(
		[selectUsersMap],
		getUsersWithoutModifiedField
	);

	acc[libName] = { libName, selector };

	return acc;
}, {});
const partialUsersDeepEqualResult = deepEqualMap.reduce<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Record<string, { libName: string; selector: any }>
>((acc, { libName, equalityFn }) => {
	const createSelector = createDeepEqualResultSelector(equalityFn);
	const selector = createSelector(
		[selectUsersMap],
		getUsersWithoutModifiedField
	);

	acc[libName] = { libName, selector };

	return acc;
}, {});

export const usersMapSelectors = {
	partialUsersMapDeepEqual,
	partialUsersDeepEqual,
	partialUsersMapDeepEqualResult,
	partialUsersDeepEqualResult,
};
