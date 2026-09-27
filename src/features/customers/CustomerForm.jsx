import { useState } from 'react';

function CustomerForm() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        status: 'Active'
    });

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
        console.log(formData.name)
        console.log(formData.company)
        console.log(formData.status)
    }

    return (
        <div>
            <h1>Add Customer</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Name </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(event) =>
                            setFormData({
                                // Without the spread operator, setFormData() replaces the entire state object, 
                                // so the other fields are removed and become undefined, 
                                // which can turn their controlled inputs into uncontrolled inputs.
                                ...formData,
                                name: event.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <label> Company </label>
                    <input
                        type="text"
                        value={formData.company}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                company: event.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <label> Status </label>
                    <select
                        value={formData.status}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                status: event.target.value,
                            })
                        }
                    >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
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
