import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import dayjs from "dayjs";

function App() {
	const [count, setCount] = useState(0);
	const currentDate = dayjs().format("YYYY-MM-DD HH:mm:ss");

	return (
		<>
			<div>
				<div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "50px" }}>
					<h1>Hello from Vite + React!</h1>
					<p>Current Date and Time (via dayjs):</p>
					<h2>{currentDate}</h2>
				</div>
			</div>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
