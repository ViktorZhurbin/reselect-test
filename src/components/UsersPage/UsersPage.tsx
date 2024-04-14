import { useDispatch } from "react-redux";

import { Template } from "./components/Template";
import { updateRandomUserName } from "../../redux/users/slice";
import {
	selectUserIds,
	selectUserIds__shallowEqualResult,
	selectPartialUsers,
	selectPartialUsers__deepEqualResult,
	selectPartialUsers__deepEqual,
	selectPartialUsersMap,
	selectPartialUsersMap__deepEqualResult,
	selectPartialUsersMap__deepEqual,
} from "../../redux/users/selectors";
import { USERS_COUNT } from "../../constants/users";

const numberFormat = new Intl.NumberFormat();

export const UsersPage = () => {
	const dispatch = useDispatch();

	const modifyRandomUser = () => {
		dispatch(updateRandomUserName());
	};

	return (
		<section>
			<div>
				<h3>Number of users: {numberFormat.format(USERS_COUNT)}</h3>

				<button onClick={modifyRandomUser}>Modify random user</button>

				<br />
				<br />

				<h3>Selector Recomputations</h3>
				<h4>UserId[]</h4>
				<Template name="selectUserIds" selector={selectUserIds} />
				<Template
					name="selectUserIds__shallowEqualResult"
					selector={selectUserIds__shallowEqualResult}
				/>

				<hr />

				<h4>User[] - without isModified property</h4>
				<Template name="selectPartialUsers" selector={selectPartialUsers} />
				<br />
				{/* <Template
					name="selectPartialUsers__shallowEqualResult"
					selector={selectPartialUsers__shallowEqualResult}
				/>
				<Template
					name="selectPartialUsers__shallowEqual"
					selector={selectPartialUsers__shallowEqual}
				/> */}
				<br />
				<Template
					name="selectPartialUsers__deepEqualResult"
					selector={selectPartialUsers__deepEqualResult}
				/>
				<Template
					name="selectPartialUsers__deepEqual"
					selector={selectPartialUsers__deepEqual}
				/>

				<hr />

				<h4>Map of UserId to User - without isModified property</h4>
				<Template
					name="selectPartialUsersMap"
					selector={selectPartialUsersMap}
				/>
				<br />
				{/* <Template
					name="selectPartialUsersMap__shallowEqualResult"
					selector={selectPartialUsersMap__shallowEqualResult}
				/>
				<Template
					name="selectPartialUsersMap__shallowEqual"
					selector={selectPartialUsersMap__shallowEqual}
				/> */}
				<br />
				<Template
					name="selectPartialUsersMap__deepEqualResult"
					selector={selectPartialUsersMap__deepEqualResult}
				/>
				<Template
					name="selectPartialUsersMap__deepEqual"
					selector={selectPartialUsersMap__deepEqual}
				/>
			</div>
		</section>
	);
};
