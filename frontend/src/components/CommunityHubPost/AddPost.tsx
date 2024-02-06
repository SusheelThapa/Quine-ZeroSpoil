import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddPostForm from "./AddPostForm";

const AddPost = () => {
  const [isPostFormActive, setPostFormActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setPostFormActive(true)}
        className="py-8 text-2xl hover:bg-gray-900 hover:text-white flex  justify-center items-center gap-4 m-6 w-4/5 bg-white rounded-xl"
      >
        <AiOutlinePlus size={32} />
        <div className="flex justify-center items-center font-extrabold">
          Add Post
        </div>
      </div>
      {isPostFormActive && (
        <AddPostForm isFormActive={setPostFormActive} />
      )}
    </>
  );
};

export default AddPost;
