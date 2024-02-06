import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import AddCommunityPost from "./AddPost";
import { CommunityPost } from "@/types";
import { getInitial } from "@/utils/getInitial";

interface Props {
  posts: CommunityPost[];
}

const CommunityPosts = ({ posts }: Props) => {
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
    let backgroundColor, borderColor, textColor;

    switch (label.toLowerCase()) {
      case "recipe":
        backgroundColor = "bg-orange-200";
        borderColor = "border-orange-700";
        textColor = "text-orange-700";
        break;
      case "donation":
        backgroundColor = "bg-blue-200";
        borderColor = "border-blue-700";
        textColor = "text-blue-700";
        break;
      default:
        backgroundColor = "bg-gray-200";
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
     
  
    `;
  };

  return (
    <div className=" text-sm col-span-3 w-full flex flex-col justify-center items-center">
      <AddCommunityPost />
      <div className="flex justify-center flex-col items-center gap-8 m-6 w-full">
        {posts.map(
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
                <h1 className="font-extrabold text-3xl tracking-wide">
                  {title}
                </h1>
                <div className="flex justify-between items-center">
                  <div className="flex gap-5  items-center">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/" />
                      <AvatarFallback className="text-black">
                        {getInitial(postedBy)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-xl text-gray-600 flex flex-col">
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
                <div className="text-lg text-black">{description}</div>
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
    </div>
  );
};

export default CommunityPosts;
