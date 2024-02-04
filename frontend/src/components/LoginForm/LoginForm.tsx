import { useState } from "react";

import { FaLongArrowAltRight } from "react-icons/fa";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // TODO: Send the login credentials to backend
  };

  return (
    <div className="container mx-auto px-4 col-span-3 bg-white full flex flex-col justify-center items-center gap-16">
      <div className="w-3/4 md:w-2/3 lg:w-1/2">
        <h1 className="text-5xl font-bold text-left mb-4 ">Welcome back!</h1>
        <div className="text-lg text-gray-400">
          Please login to your account
        </div>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="w-3/4 md:w-2/3 lg:w-1/2 flex gap-2 flex-col"
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-3 w-full border-2 text-base rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-3 w-full border-2 text-base rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="text-blue-400 text-base cursor-pointer font-bold mb-6">
          Forgot Password?
        </div>

        <button
          type="submit"
          className="w-full text-xl font-extrabold bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
        >
          Login to ZeroSpoil <FaLongArrowAltRight className="inline" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
