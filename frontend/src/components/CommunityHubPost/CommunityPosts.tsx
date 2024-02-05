import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import AddCommunityPost from "./AddPost";

const communityPost = [
  {
    title: "Delicious Chocolate Cake",
    postedBy: "Alice",
    label: ["Recipe"],
    description:
      "Indulge in the rich and moist chocolate goodness of this homemade cake recipe. Perfect for any sweet tooth!",
    likeCount: 56,
    commentCount: 12,
    postedOn: "2024-01-01T00:00:00.000Z",
  },
  {
    title: "Helping Hand Initiative",
    postedBy: "Bob",
    label: ["Donation"],
    description:
      "Join us in supporting local communities. Donate non-perishable items and make a positive impact on those in need.",
    likeCount: 34,
    commentCount: 8,
    postedOn: "2022-01-05T00:00:00.000Z",
  },
  {
    title: "Summer Salad Recipe",
    postedBy: "Charlie",
    label: ["Recipe"],
    description:
      "Stay refreshed with this easy-to-make and healthy summer salad. Packed with vibrant veggies and flavors!",
    likeCount: 72,
    commentCount: 21,
    postedOn: "2022-03-10T00:00:00.000Z",
  },
  {
    title: "Supporting Local Shelter",
    postedBy: "David",
    label: ["Donation"],
    description:
      "Let's come together to support our local shelter. Your donations can make a difference in the lives of those without homes.",
    likeCount: 45,
    commentCount: 15,
    postedOn: "2022-03-15T00:00:00.000Z",
  },
  {
    title: "Family Dinner Recipe",
    postedBy: "Eva",
    label: ["Recipe"],
    description:
      "Create unforgettable family moments with this heartwarming dinner recipe. Perfect for cozy gatherings!",
    likeCount: 63,
    commentCount: 18,
    postedOn: "2022-03-20T00:00:00.000Z",
  },
  {
    title: "Book Drive for Kids",
    postedBy: "Frank",
    label: ["Donation"],
    description:
      "Donate gently used children's books to help build a library for kids. Let's foster a love for reading!",
    likeCount: 29,
    commentCount: 7,
    postedOn: "2022-03-25T00:00:00.000Z",
  },
  {
    title: "Quick Breakfast Recipe",
    postedBy: "Grace",
    label: ["Recipe"],
    description:
      "Start your day right with this quick and delicious breakfast recipe. Fuel up for a productive day ahead!",
    likeCount: 41,
    commentCount: 14,
    postedOn: "2022-03-30T00:00:00.000Z",
  },
  {
    title: "Clothing Drive for Winter",
    postedBy: "Henry",
    label: ["Donation", "Others"],
    description:
      "Collecting warm clothing for those in need during the winter season. Your old coats can provide warmth to someone else.",
    likeCount: 37,
    commentCount: 10,
    postedOn: "2022-04-05T00:00:00.000Z",
  },
  {
    title: "Vegetarian Pasta Delight",
    postedBy: "Ivy",
    label: ["Recipe"],
    description:
      "Explore the world of vegetarian cuisine with this mouthwatering pasta recipe. A delightful twist for pasta lovers!",
    likeCount: 53,
    commentCount: 16,
    postedOn: "2022-04-10T00:00:00.000Z",
  },
  {
    title: "Supporting Local Artisans",
    postedBy: "Jack",
    label: ["Donation", "Others", "Recipe"],
    description:
      "Contribute to local art by supporting handmade crafts. Your donations empower local artisans and celebrate creativity.",
    likeCount: 28,
    commentCount: 9,
    postedOn: "2022-04-15T00:00:00.000Z",
  },
];

const CommunityPosts = () => {
  const [posts] = useState(communityPost);

  const getNameInitial = (name: string): string => {
    const names = name.split(" ");
    return names.map((n) => n.charAt(0)).join("");
  };

  const getPostAgeString = (dateString: string): string => {
    const currentDate = new Date();
    const providedDate = new Date(dateString);

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
                        {getNameInitial(postedBy)}
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
