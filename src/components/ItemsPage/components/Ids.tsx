import { useSelector } from "react-redux";
import { selectItemIds__shallowEqual } from "../../../redux/items/selectors";

export const Ids = () => {
	const itemIds = useSelector(selectItemIds__shallowEqual);

	return (
		<section>
			<div>
				<div>
					selectItemIds__shallowEqual recomputations:{" "}
					{selectItemIds__shallowEqual.recomputations()}
				</div>
				<div>
					selectItemIds__shallowEqual dependencyRecomputations:{" "}
					{selectItemIds__shallowEqual.dependencyRecomputations()}
				</div>
			</div>
			{itemIds.map((id) => (
				<li key={id}>{id}</li>
			))}
		</section>
	);
};
