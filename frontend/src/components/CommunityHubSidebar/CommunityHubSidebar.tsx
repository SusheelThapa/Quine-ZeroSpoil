interface Props {
  sidebarList: { icon: React.ReactNode; title: string }[];
  selectedFilter: string;
  onClickSideBarOption: (title: string) => void;
}

const CommunityHubSidebar = ({
  sidebarList,
  selectedFilter,
  onClickSideBarOption,
}: Props) => {
  return (
    <div className=" pt-4 pb-16 h-full w-full  ">
      <ul className="h-full space-y-4 text-xl w-full ml-6 pr-4 border-r-4 border-gray-300">
        {sidebarList.map(({ icon, title }) => {
          return (
            <li
              key={title}
              onClick={() => onClickSideBarOption(title)}
              className={`w-full py-3 pl-2 rounded-xl flex justify-start item-center space-x-2   ${
                selectedFilter === title ? "bg-white " : "hover:bg-gray-200 "
              }`}
            >
              <div className="mr-3 p-1 rounded-lg bg-white w-9 h-9 flex justify-center items-center">
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
