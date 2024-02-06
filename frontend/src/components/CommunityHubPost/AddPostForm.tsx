import { CommunityPost } from "@/types";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
interface Props {
  isFormActive: (bool: boolean) => void;
  handleAddNewPost: (newPost: CommunityPost) => void;
}

const AddPostForm = ({ isFormActive, handleAddNewPost }: Props) => {
  const [formData, setFormData] = useState<CommunityPost>({
    title: "",
    postedBy: "Susheel Thapa",
    label: ['Recipe'],
    description: "",
    likeCount: 0,
    commentCount: 0,
    postedOn: new Date(),
  });
  const [selectedLabel, setSelectedLabel] = useState<string>();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddNewPost(formData);
    isFormActive(false);
  };

  return (
    <div className="fixed inset-0  backdrop-blur-xl z-50 flex justify-center items-center">
      <div className="bg-gray-100  py-12 px-12 rounded-3xl w-5/12 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between mb-6 ">
          <h2 className="text-4xl font-bold text-indigo-700">
            Create a New Post
          </h2>
          <button
            onClick={() => {
              isFormActive(false);
            }}
            className="text-gray-700 hover:bg-red-500 rounded-md focus:outline-none hover:text-white"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <form className="flex flex-col gap-3 mt-3" onSubmit={handleFormSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-xl font-medium text-gray-800 mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFormData({ ...formData, title: e.target.value });
              }}
              placeholder="Enter your title"
              className="mt-1 p-3 text-base border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500 bg-white"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-xl font-medium text-gray-800 mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Enter your description"
              rows={4}
              value={formData.description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setFormData({ ...formData, description: e.target.value });
              }}
              className="mt-1 p-3 text-base border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500 bg-white"
              required
            ></textarea>
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="label"
              className="block text-xl font-medium text-gray-800 mb-2"
            >
              Label:
            </label>
            <select
              id="label"
              name="label"
              value={selectedLabel} // Set the selected value
              onChange={(e) => {
                setSelectedLabel(e.target.value);
                setFormData({ ...formData, label: [e.target.value] }); // Update formData with the selected label
              }}
              className="mt-1 p-3 text-base border border-gray-300 rounded-lg w-full focus:outline-none focus:border-indigo-500 bg-white transition duration-300 ease-in-out hover:border-indigo-500 appearance-none"
            >
              <option value="Recipe">Recipe</option>
              <option value="Donation">Donation</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-3 text-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPostForm;
