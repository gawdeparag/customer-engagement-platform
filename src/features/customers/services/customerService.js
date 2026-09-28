import customers from '../data/customers.js'

export function fetchCustomers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(customers)
        }, 1000)
    })
}
