import {
  FaCompass,
  FaFire,
  FaUtensils,
  FaHeart,
  FaEllipsisH,
} from "react-icons/fa";

const sidebarList = [
  { icon: <FaCompass className="text-2xl text-gray-500" />, title: "Explore" },
  { icon: <FaFire className="text-2xl text-gray-500" />, title: "Trending" },
  { icon: <FaUtensils className="text-2xl text-gray-500" />, title: "Recipe" },
  { icon: <FaHeart className="text-2xl text-gray-500" />, title: "Donation" },
  { icon: <FaEllipsisH className="text-2xl text-gray-500" />, title: "Others" },
];

const CommunityHubSidebar = () => {
  return (
    <div className="pr-10 pt-4 pb-16 h-full w-full  ">
      <ul className="space-y-4 text-2xl ">
        {sidebarList.map(({ icon, title }) => {
          return (
            <li className="p-3 rounded-xl flex item-center space-x-2  hover:bg-gray-200">
              <div className="mr-3 p-1 rounded-lg bg-gray-100 w-9 h-9 flex justify-center items-center">
                {icon}
              </div>
              <span className="text-gray-600">{title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommunityHubSidebar;
