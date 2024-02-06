import React, { useState } from "react";

import { useToast } from "../ui/use-toast";
import axios from 'axios';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    agreeToPrivacyPolicy: false,
    agreeToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/contact_form/",
        formData
      );

      if (response.data.status === "success") {
        // Form submitted successfully
        console.log("Form submitted successfully");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setFormData(
        {
          email: "",
          message: "",
          agreeToPrivacyPolicy: false,
          agreeToTerms: false,
        });
    }
  };

  return (
    <div className="bg-white ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border-2  rounded-md focus:border-[#f7941d] focus:border-2 focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 p-2 w-full border-2  rounded-md focus:border-[#f7941d] focus:border-2 focus:outline-none"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="agreeToPrivacyPolicy"
              name="agreeToPrivacyPolicy"
              checked={formData.agreeToPrivacyPolicy}
              onChange={handleChange}
              className="mr-2 accent-[#f2af5d]"
              required
            />
            <span className="text-sm text-gray-600">
              I agree to the Privacy Policy
            </span>
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mr-2 accent-[#f7941d]"
              required
            />
            <span className="text-sm text-gray-600">
              I agree to the Terms and Conditions
            </span>
          </label>
        </div>

        <button
          onClick={() => {
            toast({
              variant: "contact-us",
              description:
                "Thanks for contacting us! We appreciate your interest.🙌",
            });
          }}
          type="submit"
          className="w-full text-lg font-bold bg-[#ff8c00] text-white py-2 rounded-md hover:bg-[#f7941d] focus:outline-none focus:ring focus:border-[#f7941d]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
