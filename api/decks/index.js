//import fetch from 'isomorphic-fetch'

export function getAllDecks() {
	//return fetch('https://jsonplaceholder.typicode.com/posts')
	return [
		{ id: "g83hfs", name: "Ten Foward", diskId: "etbt36" },
		{ id: "r34fsc", name: "Captains Corner", diskId: "jgj7rd" },
		{ id: "t05ge3", name: "Holodeck9", diskId: "ki64fe" }
	];
}

export function getDeckById(id) {
	//return fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`)
	return getAllDecks().find(deck => deck.id === id) || {};
}
