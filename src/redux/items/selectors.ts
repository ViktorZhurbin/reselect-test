import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { shallowEqual } from "react-redux";

const selectItemsMap = (state: RootState) => state.items.mapOfObjects;

export const selectItemIds__shallowEqual = createSelector(
	[selectItemsMap],
	(itemsMap) => Object.keys(itemsMap),
	{ memoizeOptions: { resultEqualityCheck: shallowEqual } }
);

export const selectItemsToDisplay = createSelector(
	[selectItemsMap],
	(itemsMap) => Object.values(itemsMap).filter((item) => !item.isHidden)
);
