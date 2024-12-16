import axios from "axios";
import "./style.css";

// Import lodash (make sure it's installed in node_modules)
import _ from "lodash";

// Example usage of lodash
const numbers = [1, 2, 3, 4, 5];
const shuffledNumbers = _.shuffle(numbers); // Shuffles the numbers array

console.log("Shuffled numbers:", shuffledNumbers);

document.querySelector("#app").innerHTML = `
  <h1>Axios Test with JSONPlaceholder</h1>
  <ul id="post-list"></ul>
`;
async function fetchData() {
	try {
		const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
		console.log("Data fetched successfully:", response.data);

		// Render the data to the DOM (for testing purposes)
		const list = document.getElementById("post-list");
		response.data.forEach((post) => {
			const listItem = document.createElement("li");
			listItem.textContent = `${post.id}: ${post.title}`;
			list.appendChild(listItem);
		});
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

fetchData();
