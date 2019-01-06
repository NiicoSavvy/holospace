//import fetch from 'isomorphic-fetch'

export function getAllDisks() {
	//return fetch('https://jsonplaceholder.typicode.com/posts')
	return [
		{ id: "etbt36", name: "general", topic: "", deckId: "g83hfs" },
		{
			id: "tr46g5",
			name: "The Voice",
			topic: "Hear me roar!",
			deckId: "g83hfs"
		},
		{ id: "kb5jh6", name: "war room", topic: "", deckId: "g83hfs" },
		{ id: "jgj7rd", name: "general", topic: "", deckId: "r34fsc" },
		{ id: "ki64fe", name: "general", topic: "", deckId: "t05ge3" }
	];
}

export function getDiskById(id) {
	return getAllDisks().find(disk => disk.id === id) || {};
}

export function getDeckDisks(deckId) {
	return getAllDisks().filter(disk => disk.deckId === deckId);
}
