import { createSlice } from "@reduxjs/toolkit";
import { mockItemsMap } from "./mocks";

export type Item = {
	id: string;
	title: string;
	ts: number;
	isHidden?: boolean;
};

export type ItemsState = {
	mapOfObjects: Record<string, Item>;
};

export const initialState: ItemsState = {
	mapOfObjects: mockItemsMap,
};

const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		updateHiddenItemTs: (state) => {
			const hiddenItem = Object.values(state.mapOfObjects).find(
				(item) => item.isHidden
			);

			if (hiddenItem) {
				hiddenItem.ts = Date.now();
			}
		},
	},
});

export const { reducer } = itemsSlice;
export const { updateHiddenItemTs } = itemsSlice.actions;
