import { Link, useParams } from 'react-router-dom'
import { useCustomers } from './CustomerProvider.jsx'

function CustomerDetails() {
    const { customerId } = useParams()
    const { customers } = useCustomers()
    const customer = customers.find(
        (customer) => customer.id === Number(customerId)
    )

    if (!customer) {
        return (
            <div>
                <h1>Customer Not Found</h1>
                <p>
                    No customer exists with ID {customerId}.
                </p>

                <Link to="/customers">
                    Back to Customers
                </Link>
            </div>
        )
    }

    return (
        <div>
            <Link to="/customers">
                Back to Customers
            </Link>

            <h1>Customer Details</h1>

            <p>
                <strong>Name:</strong> {customer.name}
            </p>
            <p>
                <strong>Company:</strong> {customer.company}
            </p>
            <p>
                <strong>Status:</strong> {customer.status}
            </p>
        </div>
    )
}

export default CustomerDetails
