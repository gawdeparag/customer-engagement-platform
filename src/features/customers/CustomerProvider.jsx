import { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'

import customersData from './data/customers.js'

const CustomerContext = createContext(null)

export function CustomerProvider() {
    const [customers, setCustomers] = useState(customersData)

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
