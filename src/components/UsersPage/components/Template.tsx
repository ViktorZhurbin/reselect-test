import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const Template = ({
	name,
	selector,
}: {
	name: string;
	selector: ReturnType<typeof createSelector>;
}) => {
	useSelector((state) => {
		const t0 = performance.now();
		const result = selector(state);
		const t1 = performance.now();

		const timeMs = (t1 - t0).toFixed(2);
		console.log({ [name]: `${timeMs} ms` });

		return result;
	});

	return (
		<div>
			{name}: {selector.recomputations()}
		</div>
	);
};
