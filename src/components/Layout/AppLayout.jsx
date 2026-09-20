function AppLayout({ children }) {
	return (
		<div>
			<header>
				Customer Engagement Platform
			</header>

			<main>
				{children}
			</main>
		</div>
	)
}

export default AppLayout
