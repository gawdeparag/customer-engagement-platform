import { useState } from 'react';
import CustomerTable from './components/CustomerTable.jsx';

function Customers() {
    // Temporarily disabling the unused variable warning for setCustomers
    // eslint-disable-next-line no-unused-vars
    const [customers, setCustomers] = useState([
        {
            id: 1,
            name: 'Rahul Sharma',
            company: 'ABC Ltd',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Indumati Shah',
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
            company: 'ABC Ltd',
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
            company: 'XYZ Ltd',
            status: 'Active',
        },
        {
            id: 8,
            name: 'Parag Rawal',
            company: 'XYZ Ltd',
            status: 'Inactive',
        },
        {
            id: 9,
            name: 'Siddhant Singh',
            company: 'ABC Ltd',
            status: 'Inactive',
        },
        {
            id: 10,
            name: 'Mahmad Yunus',
            company: 'XYZ Ltd',
            status: 'Inactive',
        },
    ]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCustomers = customers.filter((customer) => {
        const search = searchTerm.toLowerCase();
        return (
            customer.name.toLowerCase().includes(search) ||
            customer.company.toLowerCase().includes(search) ||
            customer.status.toLowerCase().includes(search)
        );
    });

    return (
        <div>
            <h1>Customers</h1>

            <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)} />

            <CustomerTable customers={filteredCustomers} />
        </div>
    )
}

export default Customers
