import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 justify-between items-center bg-black text-gray-300 py-6 pt-10 text-sm">
      <div className=" mx-auto flex  justify-evenly items-center w-full ">
        <div className="flex flex-col gap-1 justify-center items-start">
          <Link to="/">
            <div className="text-4xl font-bold">
              <span className="text-green-500">Zero</span>
              <span className="text-red-500">Spoil</span>
            </div>
          </Link>
          <div className="text-xl text-gray-400">
            Effortless Food Waste Reduction
          </div>
          <div className="mt-3 flex text-xl gap-2 text-gray-500 ">
            <FaFacebook className="hover:text-white" />
            <FaInstagram className="hover:text-white" />
            <FaTiktok className="hover:text-white" />
            <FaXTwitter className="hover:text-white" />
            <FaLinkedin className="hover:text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-white">About</h1>
          <div className="hover:text-white">About Us</div>
          <div className="hover:text-white">Features</div>
          <div className="hover:text-white">News</div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-white">Account</h1>
          <div className="hover:text-white">Support Center</div>
          <div className="hover:text-white">Feedback</div>
          <div className="hover:text-white">Contact Us</div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-white"> Company</h1>
          <div className="hover:text-white">
            <Link to="/our-team"> Our Team</Link>
          </div>
          <div className="hover:text-white">Partner</div>
          <div className="hover:text-white">
            <Link to="/faq">FAQ</Link>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-lg">
        &#169; ZeroSpoil 2024. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
