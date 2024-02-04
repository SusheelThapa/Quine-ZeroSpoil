import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface FormData {
    product_name: string;
    description: string;
    expiry_date: string;
    purchase_date: string;
    quantity: string;
    notes: string;
    errors?: Record<string, string>;
}


const AddItem: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormData>({
        product_name: '',
        description: '',
        expiry_date: '',
        purchase_date: '',
        quantity: '',
        notes: '',
        errors: {},
    });



    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("form is valid ")
            try {
                // Your form submission logic here using the formData state

                await axios.post("http://localhost:8000/api/expirytrackers/", formData)
                    .then(() => console.log("successful post request"))


                setFormData({
                    product_name: '',
                    description: '',
                    expiry_date: '',
                    purchase_date: '',
                    quantity: '',
                    notes: '',
                    errors: {},
                });

                navigate('/expiry_track');

                // Additional logic after successful submission if needed

            } catch (error) {
                console.log("Error:", error);
            }
        } else {
            console.log("Form not valid");
        }
    };

    const validateForm = () => {
        const errors: Record<string, string> = {};

        // console.log("inside validation")

        // Check if product_name is empty
        if (!formData.product_name) {
            errors.product_name = "Product Name is required";
        }

        // Check if description is empty
        if (!formData.description) {
            errors.description = "Description is required";
        }

        // Check if expiry_date is empty
        if (!formData.expiry_date) {
            errors.expiry_date = "Expiry Date is required";
        }

        // Check if purchase_date is empty
        if (!formData.purchase_date) {
            errors.purchase_date = "Purchase Date is required";
        }

        // Check if quantity is empty
        if (!formData.quantity) {
            errors.quantity = "Quantity is required";
        }

        setFormData((prevState) => ({ ...prevState, errors }));

        // Return true if there are no errors
        return Object.keys(errors).length === 0;
    };


    return (
        <>
            <div className="px-30 pt-10 flex justify-center">
                {/* navigation menu */}
                <div>
                    <ul className="flex gap-10 justify-start items-center font-medium">
                        <li
                            className="hover:text-green-600 cursor-pointer"
                            onClick={() => navigate('/expiry_track/')}
                        >
                            Product list
                        </li>
                        <li
                            className="hover:text-green-600 cursor-pointer"
                            onClick={() => navigate('/expiry_track/add_item')}
                        >
                            Add Item
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-80 mt-14">
                <form onSubmit={handleSubmit}>
                    <ol className="grid gap-12">
                        <li className="">
                            <label
                                htmlFor="product_name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Item Name
                            </label>
                            {formData.errors?.product_name && (
                                <p className="font-sm text-red-600">
                                    {formData.errors.product_name}
                                </p>
                            )}

                            <input
                                type="text"
                                id="product_name"
                                name="product_name"
                                value={formData.product_name}
                                onChange={handleInputChange}
                                required
                                className="border-b border-gray-300 focus:outline-none focus:border-slate-300 block w-full text-green-500"
                            />
                        </li>
                        <li className="">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Product Description
                            </label>
                            {formData.errors?.description && (
                                <p className="font-sm text-red-600">
                                    {formData.errors.description}
                                </p>
                            )}

                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                                className="border-b border-gray-300 focus:outline-none focus:border-slate-300 block w-full text-green-500"
                            />
                        </li>
                        <li className="">
                            <label
                                htmlFor="expiry_date"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Expiry Date
                            </label>
                            {formData.errors?.expiry_date && (
                                <p className="font-sm text-red-600">
                                    {formData.errors.expiry_date}
                                </p>
                            )}

                            <input
                                type="date"
                                id="expiry_date"
                                name="expiry_date"
                                value={formData.expiry_date}
                                onChange={handleInputChange}
                                required
                                className="border-b border-gray-300 focus:outline-none focus:border-slate-300 block w-full text-green-500"
                            />
                        </li>
                        <li className="">
                            <label
                                htmlFor="purchase_date"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Purchased
                            </label>
                            {formData.errors?.purchase_date && (
                                <p className="font-sm text-red-600">
                                    {formData.errors.purchase_date}
                                </p>
                            )}
                            <input
                                type="date"
                                id="purchase_date"
                                name="purchase_date"
                                value={formData.purchase_date}
                                onChange={handleInputChange}
                                required
                                className="border-b border-gray-300 focus:outline-none focus:border-slate-300 block w-full text-green-500"
                            />
                        </li>
                        <li className="">
                            <label
                                htmlFor="quantity"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Quantity
                            </label>
                            {formData.errors?.quantity && (
                                <p className="font-sm text-red-600">
                                    {formData.errors.quantity}
                                </p>
                            )}

                            <input
                                type="text"
                                id="quantity"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                required
                                className="border-b border-gray-300 focus:outline-none focus:border-slate-300 block w-full text-green-500"
                            />
                        </li>
                    </ol>
                    <button
                        type="submit"
                        className="mt-6 flex justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg--500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add item
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddItem;
