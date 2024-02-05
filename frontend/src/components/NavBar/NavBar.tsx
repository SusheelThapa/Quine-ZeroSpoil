import { IoLockClosed } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/img/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" flex justify-between items-center h-16 text-xl text-black">
      {/* Logo section */}
      <Link to="/">
        <div className="flex gap-2 items-end justify-end">
          <img
            src={Logo}
            alt="Logo of ZeroSpoil"
            className="w-10 rounded-full"
          />
          <div className="text-3xl font-extrabold ">
            <span className="text-green-500">Zero</span>
            <span className="text-red-400">Spoil</span>
          </div>
        </div>
      </Link>

      {/* navigation menu */}
      <div>
        <ul className="flex gap-10  justify-start items-center font-medium">
          <li className="hover:text-green-600 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li
            className="hover:text-green-600 cursor-pointer"
            onClick={() => scrollToSection("products")}
          >
            <Link to="/#products">Products</Link>
          </li>
          <li
            className="hover:text-green-600 cursor-pointer"
            onClick={() => scrollToSection("testimonials")}
          >
            <Link to="/#testimonials">Testimonials</Link>
          </li>
          <li
            className="hover:text-green-600 cursor-pointer"
            onClick={() => scrollToSection("contact-us")}
          >
            <Link to="/#contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* login button */}
      <Link to={"/login"}>
        <Button className="text-xl bg-green-400 text-black p-6 font-medium hover:bg-green-500 hover:text-white">
          <IoLockClosed className="mr-2" />
          Login
        </Button>
      </Link>
    </div>
  );
};

export default NavBar;
