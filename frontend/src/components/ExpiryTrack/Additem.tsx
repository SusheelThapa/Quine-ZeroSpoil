import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaCalendar, FaProductHunt, FaCubes, FaInfoCircle } from 'react-icons/fa';

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

                navigate('/expiry-track');

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
            errors.product_name = "Enter product name ";
        }

        // Check if description is empty
        if (!formData.description) {
            errors.description = "Enter description of product";
        }

        // Check if expiry_date is empty
        if (!formData.expiry_date) {
            errors.expiry_date = "Enter valid expiry date";
        }

        // Check if purchase_date is empty
        if (!formData.purchase_date) {
            errors.purchase_date = "Enter valid purchased date";
        }

        // Check if quantity is empty
        if (!formData.quantity) {
            errors.quantity = "Enter Quantity";
        }

        const newStartDate = new Date(formData.purchase_date);
        const newEndDate = new Date(formData.expiry_date);

        if (newEndDate.getTime() <= newStartDate.getTime()) {
            alert("Expiry date should be greater than purchased date");
            return false;
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
                            onClick={() => navigate('/expiry-track/')}
                        >
                            Product list
                        </li>
                        <li
                            className="hover:text-green-600 cursor-pointer"
                            onClick={() => navigate('/expiry-track/add-item')}
                        >
                            Add Item
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-80 mt-14">
                <form onSubmit={handleSubmit}>
                    <ol className="grid gap-12">
                        <li className="grid gap-2">

                            <label
                                htmlFor="product_name"
                                className="flex gap-2 text-sm font-medium leading-6 text-gray-900"
                            >
                                <FaProductHunt className="h-6 w-6 text-green-500" />

                                Product Name
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
                                className="border-b border-gray-300 focus:outline-none focus:border-slate-300 block w-full"
                            />
                        </li>
                        <li className="grid gap-2">
                            <label
                                htmlFor="description"
                                className="flex gap-2 text-sm font-medium leading-6 text-gray-900"
                            >
                                <FaInfoCircle className="h-6 w-6 text-purple-500" />
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
                                className="border-b border-gray-300 focus:outline-none focus:border-slate-300 block w-full"
                            />
                        </li>
                        <li className="grid gap-2">
                            <label
                                htmlFor="expiry_date"
                                className="flex gap-2 text-sm font-medium leading-6 text-gray-900"
                            >
                                <FaCalendar className="h-5 w-5 text-blue-500" />Expiry Date
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
                                className="border-b border-gray-300 focus:outline-none focus:border-slate-300 block w-full"
                            />
                        </li>
                        <li className="grid gap-2">
                            <label
                                htmlFor="purchase_date"
                                className="flex gap-2 text-sm font-medium leading-6 text-gray-900"
                            >
                                <FaCalendar className="h-5 w-5 text-blue-500" />

                                Purchased on
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
                                className="border-b border-gray-300 focus:outline-none focus:border-slate-300 block w-full"
                            />
                        </li>
                        <li className="grid gap-2">
                            <label
                                htmlFor="quantity"
                                className="flex gap-2 text-sm font-medium leading-6 text-gray-900"
                            >
                                <FaCubes className="h-6 w-6 text-red-500" />
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
                                className="border-b border-gray-300 focus:outline-none focus:border-slate-300 block w-full"
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
