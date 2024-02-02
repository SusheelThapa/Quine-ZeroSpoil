import { IoLockClosed } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/img/logo.svg";

const NavBar = () => {
  return (
    <div className=" flex justify-between items-center h-16 text-xl text-black">
      {/* Logo section */}
      <div className="flex gap-2 items-end justify-end">
        <img src={Logo} alt="Logo of ZeroSpoil" className="w-10 rounded-full" />
        <div className="text-3xl font-extrabold ">
          <span className="text-green-500">Zero</span>
          <span className="text-red-400">Spoil</span>
        </div>
      </div>

      {/* navigation menu */}
      <div>
        <ul className="flex gap-10  justify-start items-center font-medium">
          <li className="hover:text-green-600 cursor-pointer">Home</li>
          <li className="hover:text-green-600 cursor-pointer">Products</li>
          <li className="hover:text-green-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* login button */}
      <Button className="text-xl bg-green-400 text-black p-4 font-medium hover:bg-green-500 hover:text-white">
        <IoLockClosed className="mr-2" />
        Login
      </Button>
    </div>
  );
};

export default NavBar;
