import { Outlet } from "react-router-dom";
import About from "./components/About";
import Heder from "./components/Heder";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Heder />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
