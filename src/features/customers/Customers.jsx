import { useState } from 'react'
import { Link } from 'react-router-dom'

import CustomerTable from './components/CustomerTable.jsx'
import { useCustomers } from './CustomerProvider.jsx'

function Customers() {
    const {
        customers,
        loading,
        error,
    } = useCustomers()

    const [searchTerm, setSearchTerm] = useState('')

    if (loading) {
        return <p>Loading customers...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    const filteredCustomers = customers.filter((customer) => {
        const search = searchTerm.toLowerCase()

        return (
            customer.name.toLowerCase().includes(search) ||
            customer.company.toLowerCase().includes(search) ||
            customer.status.toLowerCase().includes(search)
        )
    })

    return (
        <div>
            <h1>Customers</h1>

            <Link to="/customers/new">
                Add Customer
            </Link>

            <div>
                <input
                    type="text"
                    placeholder="Search customers..."
                    value={searchTerm}
                    onChange={(event) =>
                        setSearchTerm(event.target.value)
                    }
                />
            </div>

            {filteredCustomers.length === 0 ? (
                <p>No customers found.</p>
            ) : (
                <CustomerTable
                    customers={filteredCustomers}
                />
            )}
        </div>
    )
}

export default Customers
