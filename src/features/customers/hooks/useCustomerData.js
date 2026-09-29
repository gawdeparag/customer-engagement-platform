import { useEffect, useState } from 'react'

import { fetchCustomers } from '../services/CustomerService.js'

function useCustomersData() {
    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadCustomers() {
            try {
                setLoading(true)
                setError(null)

                const data = await fetchCustomers()

                setCustomers(data)
            } catch (error) {
                setError('Failed to load customers.', error.message)
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

    return {
        customers,
        loading,
        error,
        addCustomer,
    }
}

export default useCustomersData
