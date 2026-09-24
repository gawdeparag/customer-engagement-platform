function CustomerRow({ customer }) {
    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.company}</td>
            <td>{customer.status}</td>
            <td>
                <button>View</button>
                <button>Edit</button>
            </td>
        </tr>
    )
}

export default CustomerRow
