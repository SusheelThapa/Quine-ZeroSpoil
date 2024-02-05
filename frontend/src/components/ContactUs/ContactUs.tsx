import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div id="contact-us" className="mt-32 my-20 flex justify-evenly items-center">
      <div className="w-2/5 flex flex-col justify-start items-start gap-5">
        <div className="text-5xl font-medium">
          Send us a <span className="text-[#ff8c00] underline">message...</span>
        </div>
        <div className="text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsa
          labore? Consequatur sapiente repellat dolorum expedita hic. Velit
          accusamus magni facere consectetur ad fugiat esse, repudiandae aliquid
          ea
        </div>
        <div className="ml-3 flex text-sm text-stale-400  flex-col gap-2">
          <p className="flex gap-4">
            <FaPhoneAlt />
            +00 000 0000
          </p>
          <p className="flex gap-4">
            <FaLocationDot />
            zerospoil@zerospoil.com
          </p>
          <p className="flex gap-4">
            <MdEmail /> Kathmandu, Nepal
          </p>
        </div>
      </div>
      <div className="mx-10 px-8 py-10 w-4/12 shadow-2xl rounded-2xl  ">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
