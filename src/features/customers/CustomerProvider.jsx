import {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'
import { Outlet } from 'react-router-dom';
import { fetchCustomers } from './services/CustomerService.js';

const CustomerContext = createContext(null)

export function CustomerProvider() {
    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadCustomers() {
            try {
                setLoading(true)

                const data = await fetchCustomers()

                setCustomers(data)
            } catch (error) {
                setError('Failed to load customers:' + error.message)
            } finally {
                setLoading(false)
            }
        }

        loadCustomers()
    }, [])

    function addCustomer(customer) {
        setCustomers((previousCustomers) => [
            ...previousCustomers,
            customer,
        ])
    }

    return (
        <CustomerContext.Provider
            value={{
                customers,
                loading,
                error,
                addCustomer,
            }}
        >
            <Outlet />
        </CustomerContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCustomers() {
    return useContext(CustomerContext)
}
