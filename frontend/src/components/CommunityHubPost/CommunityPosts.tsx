import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import AddCommunityPost from "./AddPost";
import { CommunityPost } from "@/types";
import { getInitial } from "@/utils/getInitial";
import { useState } from "react";
interface Props {
  posts: CommunityPost[];
  handleAddNewPost: (newPost: CommunityPost) => void;
}

const CommunityPosts = ({ posts, handleAddNewPost }: Props) => {
  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const displayPages = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPostAgeString = (providedDate: Date): string => {
    const currentDate = new Date();

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerWeek = 7 * millisecondsPerDay;
    const millisecondsPerMonth = 30.44 * millisecondsPerDay; // Approximate value for a month
    const millisecondsPerYear = 365.25 * millisecondsPerDay; // Approximate value for a year

    const timeDifference = currentDate.getTime() - providedDate.getTime();
    const years = Math.floor(timeDifference / millisecondsPerYear);
    const months = Math.floor(timeDifference / millisecondsPerMonth);
    const weeks = Math.floor(timeDifference / millisecondsPerWeek);
    const days = Math.floor(timeDifference / millisecondsPerDay);

    return years > 0
      ? `${years} year${years > 1 ? "s" : ""} old`
      : months > 0
      ? `${months} month${months > 1 ? "s" : ""} old`
      : weeks > 0
      ? `${weeks} week${weeks > 1 ? "s" : ""} old`
      : `${days} day${days > 1 ? "s" : ""} old`;
  };

  const getLabelStyles = (label: string): string => {
    let backgroundColor, hoverBackgroundColor, borderColor, textColor;

    switch (label.toLowerCase()) {
      case "recipe":
        backgroundColor = "bg-orange-200";
        hoverBackgroundColor = "hover:bg-orange-300";
        borderColor = "border-orange-700";
        textColor = "text-orange-700";
        break;
      case "donation":
        backgroundColor = "bg-blue-200";
        hoverBackgroundColor = "hover:bg-blue-400";
        borderColor = "border-blue-700";
        textColor = "text-blue-700";
        break;
      default:
        backgroundColor = "bg-gray-200";
        hoverBackgroundColor = "hover:bg-gray-300";
        borderColor = "border-gray-700";
        textColor = "text-gray-700";
    }

    return `
    mx-2
      ${backgroundColor}
      ${textColor}
      text-sm
      px-3 py-1
      rounded-full
      ${borderColor}
      font-bold
      ${hoverBackgroundColor}    
    `;
  };

  const renderPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));

    for (
      let i = startPage;
      i <= Math.min(totalPages, startPage + displayPages - 1);
      i++
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`mx-2 p-2  flex justify-center items-center rounded-md font-bold  hover:bg-gray-800 hover:text-white ${
            currentPage === i
              ? "bg-gray-500 text-white text-base w-10 h-10"
              : "bg-gray-200 text-gray-500 text-sm w-8 h-8"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className=" text-sm col-span-3 w-full flex flex-col justify-center items-center">
      <AddCommunityPost handleAddNewPost={handleAddNewPost} />
      <div className="flex justify-center flex-col items-center gap-8 m-6 w-full">
        {currentPosts.map(
          ({
            title,
            postedBy,
            label,
            description,
            likeCount,
            commentCount,
            postedOn,
          }) => {
            return (
              <div
                key={title}
                className="rounded-2xl bg-white px-12 py-10 w-4/5 flex flex-col gap-6"
              >
                <h1 className="font-extrabold text-2xl tracking-wide">
                  {title}
                </h1>
                <div className="flex justify-between items-center">
                  <div className="flex gap-5  items-center">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/" />
                      <AvatarFallback className="text-black">
                        {getInitial(postedBy)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-lg text-gray-600 flex flex-col">
                      <div>{postedBy}</div>
                      <div className="text-sm text-stone-400">
                        {getPostAgeString(postedOn)}
                      </div>
                    </div>
                  </div>
                  <div>
                    {label.map((l) => {
                      return (
                        <Badge key={l} className={getLabelStyles(l)}>
                          {l}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
                <div className="text-base text-black">{description}</div>
                <div>
                  <div>
                    <span>{likeCount}</span> Like
                  </div>
                  <div>
                    <span>{commentCount}</span> Comment
                  </div>
                  <div>Share</div>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div className="flex justify-center items-center  mt-4 text-lg">
        {currentPage > 1 && (
          <button
            onClick={() => paginate(currentPage - 1)}
            className="mx-2 p-2 rounded-md  text-gray-500 font-bold hover:text-black"
          >
            &lt; Previous
          </button>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages && (
          <button
            onClick={() => paginate(currentPage + 1)}
            className="mx-2 p-2 rounded-md text-gray-500 font-bold hover:text-black"
          >
            Next &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default CommunityPosts;
