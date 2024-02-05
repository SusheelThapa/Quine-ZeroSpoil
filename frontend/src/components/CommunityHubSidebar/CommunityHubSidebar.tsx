import {
  FaCompass,
  FaFire,
  FaUtensils,
  FaHeart,
  FaEllipsisH,
} from "react-icons/fa";

const sidebarList = [
  { icon: <FaCompass className="text-xl text-gray-500" />, title: "Explore" },
  { icon: <FaFire className="text-xl text-gray-500" />, title: "Trending" },
  { icon: <FaUtensils className="text-xl text-gray-500" />, title: "Recipe" },
  { icon: <FaHeart className="text-xl text-gray-500" />, title: "Donation" },
  { icon: <FaEllipsisH className="text-xl text-gray-500" />, title: "Others" },
];

const CommunityHubSidebar = () => {
  return (
    <div className=" pt-4 pb-16 h-full w-full  ">
      <ul className="h-full space-y-4 text-xl w-full ml-6 pr-4 border-r-4 border-gray-300">
        {sidebarList.map(({ icon, title }) => {
          return (
            <li className="w-full py-3 pl-2 rounded-xl flex justify-start item-center space-x-2  hover:bg-gray-200">
              <div className="mr-3 p-1 rounded-lg bg-gray-200 w-9 h-9 flex justify-center items-center">
                {icon}
              </div>
              <div className="text-gray-600 flex justify-center items-center">
                {title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommunityHubSidebar;
