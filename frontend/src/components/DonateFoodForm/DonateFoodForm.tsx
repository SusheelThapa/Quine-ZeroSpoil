import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FoodDonationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pickupDate: "",
    address: "",
    termsChecked: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const renderInputField = ({
    label,
    name,
    value,
    type,
    placeholder,
  }: {
    label: string;
    name: string;
    value: string;
    type: string;
    placeholder: string;
  }) => (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-800 flex items-center">
        {getIcon(name)}
        {label}
      </label>
      <input
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-600 text-lg"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );

  const getIcon = (name: string) => {
    switch (name) {
      case "fullName":
        return <FaUser className="mr-2" />;
      case "email":
        return <FaEnvelope className="mr-2" />;
      case "phone":
        return <FaPhoneAlt className="mr-2" />;
      case "pickupDate":
        return <FaCalendarAlt className="mr-2" />;
      case "address":
        return <FaMapMarkerAlt className="mr-2" />;
      default:
        return null;
    }
  };

  const renderCheckbox = () => (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-checkbox text-green-600 focus:outline-none focus:border-green-600"
        id="termsCheckbox"
        name="termsChecked"
        checked={formData.termsChecked}
        onChange={handleChange}
      />
      <label
        htmlFor="termsCheckbox"
        className=" text-gray-800 cursor-pointer text-sm"
      >
        I confirm that the donated food items are in good condition and fit for
        consumption.
      </label>
    </div>
  );

  const renderSubmitButton = () => (
    <button
      type="submit"
      className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-green-300 text-lg"
    >
      Donate Food
    </button>
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform actions with the form data, e.g., send it to a server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white p-8  mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-green-600">
        Donate Food, Save Lives
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          {renderInputField({
            label: "Full Name",
            name: "fullName",
            value: formData.fullName,
            type: "text",
            placeholder: "John Doe",
          })}
          {renderInputField({
            label: "Email",
            name: "email",
            value: formData.email,
            type: "email",
            placeholder: "john@example.com",
          })}
          {renderInputField({
            label: "Phone Number",
            name: "phone",
            value: formData.phone,
            type: "text",
            placeholder: "123-456-7890",
          })}
          {renderInputField({
            label: "Pickup Date",
            name: "pickupDate",
            value: formData.pickupDate,
            type: "date",
            placeholder: "",
          })}
          {renderInputField({
            label: "Address",
            name: "address",
            value: formData.address,
            type: "text",
            placeholder: "123 Main St, City",
          })}
        </div>
        {renderCheckbox()}
        {renderSubmitButton()}
      </form>
    </div>
  );
};

export default FoodDonationForm;