import { useState } from "react";
import StatCard from "../../components/Card/StatCard";

function DashboardPage() {
	const [showDetails, setShowDetails] = useState(false);
	const [showRevenue, setShowRevenue] = useState(true);
	// let counter = 0;
	const [counter, setCounter] = useState(0);
	const statistics = [
		{
			id: 1,
			title: "Total Customers",
			value: 0
		},
		{
			id: 2,
			title: "Active Customers",
			value: 0
		},
		{
			id: 3,
			title: "Total Orders",
			value: 0
		}
	];

	function handleToggleDetails() {
		setShowDetails(!showDetails);
	}

	// function handleClick() {
	// 	counter++;
	// }

	return (
		<div>
			<h1>Dashboard</h1>

			<p>Welcome to the Customer Engagement Platform.</p>

			<div>
				{statistics.map((stat) => (
					<StatCard
						key={stat.id}
						title={stat.title}
						value={stat.value}
					/>
				))}
			</div>

			<button onClick={handleToggleDetails}>
				{showDetails ? "Hide Details" : "Show Details"}
			</button>
			{showDetails && (
				<div>
					<h2>Dashboard Details</h2>
					<p>Additional dashboard information goes here.</p>
				</div>
			)}

			<br/>

			<button onClick={() => setShowRevenue((previousValue) => !previousValue)}>
				{showRevenue ? "Hide Revenue" : "Show Revenue"}
			</button>
			{showRevenue && (
				<div>
					<h2>Dashboard Revenue</h2>
					<p>Additional revenue information goes here.</p>
				</div>
			)}

			<br/>

			<button onClick={() => setCounter((previousValue) => previousValue + 1)}>Counter</button>
			<p>Button clicked {counter} times.</p>

			<br/>
		</div>
	)
}

export default DashboardPage;
