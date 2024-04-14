import {
	getPartialUsersMap,
	getUsersWithoutModifiedField,
} from "../redux/users/helpers";
import { selectUsersMap } from "../redux/users/selectors";
import {
	createDeepEqualResultSelector,
	createDeepEqualSelector,
	deepEqualMap,
} from "./helpers";

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
