import { useSelector } from "react-redux";
import { selectItemsToDisplay } from "../../../redux/items/selectors";

export const TitleAndTs = () => {
	const items = useSelector(selectItemsToDisplay);

	return (
		<section>
			<div>
				<div>
					selectItemsToDisplay recomputations:{" "}
					{selectItemsToDisplay.recomputations()}
				</div>
				<div>
					selectItemsToDisplay dependencyRecomputations:{" "}
					{selectItemsToDisplay.dependencyRecomputations()}
				</div>
			</div>
			{items.map((item) => (
				<li key={item.title}>
					{item.title} - {item.ts}
				</li>
			))}
		</section>
	);
};
