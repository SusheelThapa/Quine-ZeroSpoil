import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import SJ from "@/assets/img/avatar/SJ.png";
import MG from "@/assets/img/avatar/MG.png";
import EY from "@/assets/img/avatar/EY.png";
import AB from "@/assets/img/avatar/AB.png";
import LG from "@/assets/img/avatar/LG.png";

import { partners } from "@/assets/json/testimonials.json";

const Partners = () => {
  const avatarImage = (avatar: string) => {
    switch (avatar) {
      case "SJ":
        return SJ;
      case "MG":
        return MG;
      case "EY":
        return EY;
      case "AB":
        return AB;
      case "LG":
        return LG;
    }
  };

  return (
    <div className=" my-28 flex  flex-col justify-center items-center gap-10">
      <div className="text-3xl text-gray-400 mb-12">
        Trusted by{" "}
        <span className="font-extrabold text-gray-700 underline">50,000+</span>{" "}
        people around the world...
      </div>
      <div className="flex justify-between gap-10 w-full">
        {partners.map(({ full_name, avatar }) => {
          return (
            <div className="flex justify-center items-center flex-col w-1/5 gap-5">
              <Avatar className="w-28 h-28">
                <AvatarImage src={avatarImage(avatar)} />
                <AvatarFallback>{avatar}</AvatarFallback>
              </Avatar>
              <p className="text-xl text-gray-600">{full_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
