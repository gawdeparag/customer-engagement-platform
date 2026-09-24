import CustomerTable from './components/CustomerTable.jsx'

function Customers() {
    const customers = [
        {
            id: 1,
            name: 'Rahul Sharma',
            company: 'ABC Ltd',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Priya Shah',
            company: 'XYZ Corp',
            status: 'Active',
        },
        {
            id: 3,
            name: 'Amit Patil',
            company: 'PQR Ltd',
            status: 'Inactive',
        },
        {
            id: 4,
            name: 'Amrita Nath',
            company: 'PQR Ltd',
            status: 'Active',
        },
        {
            id: 5,
            name: 'Atul Jaware',
            company: 'PQR Ltd',
            status: 'Active',
        },
        {
            id: 6,
            name: 'Suyash Metha',
            company: 'PQR Ltd',
            status: 'Active',
        },
        {
            id: 7,
            name: 'Suryansh Pandey',
            company: 'PQR Ltd',
            status: 'Active',
        },
        {
            id: 8,
            name: 'Parag Rawal',
            company: 'PQR Ltd',
            status: 'Inactive',
        },
        {
            id: 9,
            name: 'Siddhant Singh',
            company: 'PQR Ltd',
            status: 'Inactive',
        },
        {
            id: 10,
            name: 'Mahmad Yunus',
            company: 'PQR Ltd',
            status: 'Inactive',
        },
    ]

    return (
        <div>
            <h1>Customers</h1>

            <CustomerTable customers={customers} />
        </div>
    )
}

export default Customers
