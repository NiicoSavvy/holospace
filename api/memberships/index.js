export function getDeckMembers(deckId) {
	const memberships = [
		{ userId: "m8ddfs", deckId: "g83hfs" },
		{ userId: "wm0fm3", deckId: "r34fsc" },
		{ userId: "tes9f3", deckId: "g83hfs" },
		{ userId: "sm9m4m", deckId: "r34fsc" },
		{ userId: "zsm239", deckId: "t05ge3" },
		{ userId: "el03js", deckId: "g83hfs" }
	];
	const users = [
		{ id: "m8ddfs", username: "Blinks", avatar: "" },
		{ id: "wm0fm3", username: "Rey49", avatar: "" },
		{ id: "tes9f3", username: "SamIam", avatar: "" },
		{ id: "sm9m4m", username: "JakeNoff", avatar: "" },
		{ id: "zsm239", username: "Ralph", avatar: "" },
		{ id: "el03js", username: "HenryO", avatar: "" }
	];

	let members = memberships.filter(mbr => mbr.deckId === deckId);
	return members.map(mbr =>
		Object.assign(mbr, users.find(({ id }) => id === mbr.userId))
	);
}
