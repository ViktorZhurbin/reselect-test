import { lruMemoize, createSelectorCreator } from "@reduxjs/toolkit";
import lodashIsEqual from "lodash/isEqual";
import { shallowEqual } from "react-redux";

export const createDeepEqualSelector = createSelectorCreator(lruMemoize, {
	equalityCheck: lodashIsEqual,
	resultEqualityCheck: lodashIsEqual,
});

export const createDeepEqualResultSelector = createSelectorCreator(lruMemoize, {
	resultEqualityCheck: lodashIsEqual,
});

export const createShallowEqualSelector = createSelectorCreator(lruMemoize, {
	equalityCheck: shallowEqual,
	resultEqualityCheck: shallowEqual,
});

export const createShallowEqualResultSelector = createSelectorCreator(
	lruMemoize,
	{
		resultEqualityCheck: shallowEqual,
	}
);
