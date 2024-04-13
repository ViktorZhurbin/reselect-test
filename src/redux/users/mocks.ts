export const mockUser = {
	isModified: false,
	isInvitationAccepted: null,
	isPumbleBot: false,
	name: "Roberto Carlos",
	phone: "ABC",
	workspaceId: "5fe50fd731c8e1562086260e",
	isAddonBot: false,
	invitedBy: "62553b7a7ea05d162ab7452a",
	status: "ACTIVATED",
	timeZoneId: "Europe/Belgrade",
	broadcastWarningShownTs: "2024-03-29T09:53:44.464Z",
	role: "OWNER",
	title: "45 ",
	activeUntil: 0,
	avatar: {
		fullPath:
			"https://files.stage.ops.pumble.com/avatars/5fe50fd731c8e1562086260e/62430a097c91ed37e5d0792e/65e07c4d22be4d7090bb816d/65e07c4d22be4d7090bb816c/9af0b52a-avatar.jpg",
		scaledPath:
			"https://files.stage.ops.pumble.com/avatars/5fe50fd731c8e1562086260e/62430a097c91ed37e5d0792e/65e07c4d22be4d7090bb816d/65e07c4d22be4d7090bb816c/9af0b52a-64-avatar.jpg",
	},
	id: "62430a097c91ed37e5d0792e",
	automaticallyTimeZone: false,
	email: "roberto@example.com",
};

export type User = typeof mockUser;

export const mockChannel = {
	notifyAboutRepliesInThreads: false,
	sectionId: "",
	isMuted: false,
	postingPermissions: {
		allowThreads: true,
		allowMentions: true,
		postingPermissionsGroup: "EVERYONE",
		workspaceUserIds: [],
	},
	isMain: false,
	isMember: false,
	lastMessageTimestamp: "2023-12-01T14:12:30Z",
	creatorId: "62a865f5cd852a5efc812763",
	users: [],
	numberOfUsers: 4,
	lastMessageTimestampMilli: 1701439950000,
	mentions: 0,
	isPumbleBot: false,
	mobileNotificationPreferences: null,
	name: "linkovi",
	isArchived: false,
	unread: 0,
	workspaceId: "5fe50fd731c8e1562086260e",
	desktopNotificationPreferences: null,
	isAddonBot: false,
	addedById: null,
	lastMarkTimestamp: "1970-01-01T00:00:00Z",
	isHidden: false,
	timestamp: "2022-08-17T11:41:31Z",
	timestampMilli: 1660736491000,
	directChannelParticipants: [],
	lastMarkTimestampMilli: 0,
	isInitial: false,
	id: "62fcd3eb3430406a78b51497",
	description: "",
	channelType: "PUBLIC",
};

export const getMockUsersMap = (params: { count: number }) => {
	const { count } = params;

	const usersMap: Record<string, User> = {};

	for (let index = 0; index < count; index++) {
		let user = mockUser;

		if (index === 0) {
			user = { ...mockUser, isPumbleBot: true };
		}
		usersMap[crypto.randomUUID()] = user;
	}

	return usersMap;
};
