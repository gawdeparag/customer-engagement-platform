import { Link, useParams } from 'react-router-dom';
import customers from './data/customers.js';

function CustomerDetails() {
    const { customerId } = useParams();

    const customer = customers.find(
        (customer) => customer.id === Number(customerId)
    );

    if (!customer) {
        return (
            <div>
                <h1> Customer Not Found </h1>
                <p> No customer exists with ID {customerId}. </p>
            </div>
        )
    }

    return (
        <div>
            <Link to={`/customers`}>
                Back to Customers
            </Link>

            <h1>Customer Details</h1>

            <p>Name: {customer.name}</p>
            <p>Company: {customer.company}</p>
            <p>Status: {customer.status}</p>
        </div>
    )
}

export default CustomerDetails;
