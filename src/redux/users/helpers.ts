import { UsersState } from "./slice";

export const getUsersWithoutModifiedField = (
	usersMap: UsersState["usersMap"]
) =>
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	Object.values(usersMap).map(({ isModified, ...restUser }) => restUser);

export const getPartialUsersMap = (usersMap: UsersState["usersMap"]) => {
	return Object.fromEntries(
		Object.entries(usersMap).map(([id, user]) => {
			const partialUser = {
				avatar: user.avatar,
				email: user.email,
			};

			return [id, partialUser];
		})
	);
};
