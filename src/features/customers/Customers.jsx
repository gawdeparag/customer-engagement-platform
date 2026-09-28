import { useState } from 'react'
import { Link } from 'react-router-dom'

import CustomerTable from './components/CustomerTable.jsx'
import { useCustomers } from './CustomerProvider.jsx'

function Customers() {
    const { customers } = useCustomers()

    const [searchTerm, setSearchTerm] = useState('')

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

            <CustomerTable customers={filteredCustomers} />
        </div>
    )
}

export default Customers
