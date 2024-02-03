import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import CN from "@/assets/img/avatar/CN.png";
import LM from "@/assets/img/avatar/LM.png";
import NM from "@/assets/img/avatar/NM.png";
import RK from "@/assets/img/avatar/RK.png";
import SKT from "@/assets/img/avatar/SKT.png";
import ST from "@/assets/img/avatar/ST.png";

const partners = [
  {
    short_name: "CN",
    full_name: "Creative Nexus",
    avatar: CN,
  },
  {
    short_name: "LM",
    full_name: "Luminary Minds",
    avatar: LM,
  },
  {
    short_name: "NM",
    full_name: "Nexus Matrix",
    avatar: NM,
  },
  {
    short_name: "RK",
    full_name: "Radiant Kinetics",
    avatar: RK,
  },
  {
    short_name: "SKT",
    full_name: "Stellar King Tanke",
    avatar: SKT,
  },
  {
    short_name: "ST",
    full_name: "Summit Trails",
    avatar: ST,
  },
];

const Partners = () => {
  return (
    <div className=" my-28 flex  flex-col justify-center items-center gap-10">
      <div className="text-3xl text-gray-400 mb-12">
        Trusted by{" "}
        <span className="font-extrabold text-gray-700 underline">50,000+</span>{" "}
        people around the world...
      </div>
      <div className="flex justify-between gap-10 w-full">
        {partners.map(({ short_name, full_name, avatar }) => {
          return (
            <div className="flex justify-center items-center flex-col w-1/5 gap-5">
              <Avatar className="w-28 h-28">
                <AvatarImage src={avatar} />
                <AvatarFallback>{short_name}</AvatarFallback>
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
