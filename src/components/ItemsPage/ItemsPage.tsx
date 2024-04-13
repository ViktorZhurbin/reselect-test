import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateHiddenItemTs } from "../../redux/items/slice";
import { TitleAndTs } from "./components/TitleAndTs";
import { Ids } from "./components/Ids";

let renders = 0;
export const ItemsPage = () => {
	const [counter, setCounter] = useState(0);
	const dispatch = useDispatch();

	renders++;

	const increaseCounter = () => {
		setCounter((counter) => counter + 1);
	};

	const handleUpdate = () => {
		dispatch(updateHiddenItemTs());
	};

	return (
		<>
			<section>
				<div>Counter (local state): {counter}</div>
				<button onClick={increaseCounter}>Increase</button>
				<br />
				<br />
				<div>Renders: {renders}</div>
				<br />
				<br />
				<div>Update hidden item timestamp</div>
				<button onClick={handleUpdate}>Click</button>
			</section>

			<br />
			<br />
			<TitleAndTs />
			<br />
			<br />
			<Ids />
		</>
	);
};
