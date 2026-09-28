import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useCustomers } from './CustomerProvider.jsx'

function CustomerForm() {
    const { addCustomer } = useCustomers()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        status: 'Active',
    })
    const [errors, setErrors] = useState({})

    function validate() {
        const newErrors = {}
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }
        if (!formData.company.trim()) {
            newErrors.company = 'Company is required'
        }
        return newErrors
    }

    function handleSubmit(event) {
        event.preventDefault()
        const validationErrors = validate()
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) {
            return
        }
        const newCustomer = {
            id: Date.now(),
            name: formData.name.trim(),
            company: formData.company.trim(),
            status: formData.status,
        }
        addCustomer(newCustomer)
        navigate('/customers')
    }

    return (
        <div>
            <Link to="/customers">
                Back to Customers
            </Link>

            <h1>Add Customer</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                name: event.target.value,
                            })
                        }
                    />

                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="company">
                        Company
                    </label>

                    <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                company: event.target.value,
                            })
                        }
                    />

                    {errors.company && (
                        <p>{errors.company}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="status">
                        Status
                    </label>

                    <select
                        id="status"
                        value={formData.status}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                status: event.target.value,
                            })
                        }
                    >
                        <option value="Active">
                            Active
                        </option>

                        <option value="Inactive">
                            Inactive
                        </option>
                    </select>
                </div>

                <button type="submit">
                    Save Customer
                </button>
            </form>
        </div>
    )
}

export default CustomerForm
