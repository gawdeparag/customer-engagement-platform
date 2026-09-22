import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/customers">Customers</NavLink>
            <NavLink to="/reports">Reports</NavLink>
            <NavLink to="/administration">Administration</NavLink>
        </nav>
    )
}

export default Sidebar
