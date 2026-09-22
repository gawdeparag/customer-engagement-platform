import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
	return (
		<div>
			<header>
				Customer Engagement Platform
			</header>

			<Sidebar />

			<main>
				<Outlet/>
			</main>
		</div>
	)
}

export default AppLayout
