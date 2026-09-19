import StatCard from "../../../components/Card/StatCard";

function DashboardPage() {
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
        </div>
    );
}

export default DashboardPage;
