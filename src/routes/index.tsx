import { Link, createFileRoute } from "@tanstack/react-router";
import "../App.css";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="App">
			<ul>
				<li>
					<Link to="/google/main">Google</Link>
				</li>
			</ul>
		</div>
	);
}
