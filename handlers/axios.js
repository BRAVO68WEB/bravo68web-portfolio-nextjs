export default  {
	post : (url, data) => {
		return fetch(
			"https://api.b68.dev" + url, {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => res.json());
	},
	get : (url) => {
		return fetch("https://api.b68.dev" + url).then((res) => res.json());
	}
}

// import axios from "axios";

// export default axios.create({
// 	baseURL: "https://api.b68.dev",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// })