import CustomerRow from './CustomerRow.jsx'

function CustomerTable({ customers }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Customer</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {customers.map((customer) => (
                    <CustomerRow
                        key={customer.id}
                        customer={customer}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default CustomerTable
