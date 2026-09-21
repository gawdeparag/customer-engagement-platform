import { Outlet } from "react-router-dom";

function AppLayout() {
	return (
		<div>
			<header>
				Customer Engagement Platform
			</header>

			<main>
				<Outlet/>
			</main>
		</div>
	)
}

export default AppLayout
