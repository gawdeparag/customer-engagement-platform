import { Link } from 'react-router-dom';

function CustomerRow({ customer }) {
    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.company}</td>
            <td>{customer.status}</td>
            <td>
                <Link to={`/customers/${customer.id}`}>View</Link>
                <button>Edit</button>
            </td>
        </tr>
    )
}

export default CustomerRow
