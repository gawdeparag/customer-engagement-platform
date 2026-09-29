import { createContext, useContext } from 'react'
import { Outlet } from 'react-router-dom'

import useCustomersData from './hooks/useCustomerData'

const CustomerContext = createContext(null)

export function CustomerProvider() {
    const customerData = useCustomersData()
    return (
        <CustomerContext.Provider value={customerData}>
            <Outlet />
        </CustomerContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCustomers() {
    return useContext(CustomerContext)
}
