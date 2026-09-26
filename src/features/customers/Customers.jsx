import { useState } from 'react';
import CustomerTable from './components/CustomerTable.jsx';
import customersData from './data/customers.js';

function Customers() {
    const customers = customersData;
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
