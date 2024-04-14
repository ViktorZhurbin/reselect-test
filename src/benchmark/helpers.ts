import { lruMemoize, createSelectorCreator } from "@reduxjs/toolkit";
import { LruMemoizeOptions } from "reselect";
import { shallowEqual } from "react-redux";
import lodashIsEqual from "lodash/isEqual";
import * as fastEquals from "fast-equals";
import reactFastCompare from "react-fast-compare";

export const createSelectorFromOptions = (options: LruMemoizeOptions) =>
	createSelectorCreator(lruMemoize, options);

export const deepEqualMap = [
	{ libName: "lodashIsEqual", equalityFn: lodashIsEqual },
	{ libName: "fastEquals", equalityFn: fastEquals.deepEqual },
	{ libName: "reactFastCompare", equalityFn: reactFastCompare },
] as const;

export const createDeepEqualSelector = (
	equalityFn: LruMemoizeOptions["equalityCheck"] = lodashIsEqual
) =>
	createSelectorCreator(lruMemoize, {
		equalityCheck: equalityFn,
		resultEqualityCheck: equalityFn,
	});

export const createDeepEqualResultSelector = (
	equalityFn: LruMemoizeOptions["equalityCheck"]
) =>
	createSelectorCreator(lruMemoize, {
		resultEqualityCheck: equalityFn,
	});

export const selectors = {
	shallowEqualResult: {
		reactRedux: createSelectorFromOptions({
			resultEqualityCheck: shallowEqual,
		}),
	},
	shallowEqual: {
		reactRedux: createSelectorFromOptions({
			equalityCheck: shallowEqual,
			resultEqualityCheck: shallowEqual,
		}),
	},
	deepEqualResult: {
		lodash: createSelectorFromOptions({
			resultEqualityCheck: lodashIsEqual,
		}),
		fastEquals: createSelectorFromOptions({
			resultEqualityCheck: fastEquals.deepEqual,
		}),
		reactFastCompare: createSelectorFromOptions({
			resultEqualityCheck: reactFastCompare,
		}),
	},
	deepEqual: {
		lodash: createSelectorFromOptions({
			equalityCheck: lodashIsEqual,
			resultEqualityCheck: lodashIsEqual,
		}),
		fastEquals: createSelectorFromOptions({
			equalityCheck: fastEquals.deepEqual,
			resultEqualityCheck: fastEquals.deepEqual,
		}),
		reactFastCompare: createSelectorFromOptions({
			equalityCheck: reactFastCompare,
			resultEqualityCheck: reactFastCompare,
		}),
	},
};
