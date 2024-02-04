import logo from "@/assets/img/logo-transparent.png";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import SJ from "@/assets/img/avatar/SJ.png";
const LoginHero = () => {
  return (
    <div
      className="p-10 px-16 bg-stone-200
      rounded-2xl flex flex-col justify-between items-start"
    >
      <div className="flex justify-start items-center  ">
        <img src={logo} alt="Logo of ZeroSpoil" width={40} />
        <div className="text-4xl font-extrabold ">
          <span className="text-green-500 underline decoration-3 ">Zero</span>
          <span className="text-red-400 underline decoration-3 ">Spoil</span>
        </div>
      </div>

      <div className="text-lg flex flex-col justify-around items-center gap-10 ">
        <div className="text-6xl  mb-2 font-extrabold  tracking-normal ">
          Start your journey with us.
        </div>
        <div className="text-gray-500">
          Discover the world's bestplatform to reduce food waste, focusing
          towards conscious and impactful living. Embrace ZerpSpoil and savor
          the taste of a greener, more connected world.
        </div>
      </div>

      <div className="w-full flex gap-5 flex-col justify-start items-center bg-gray-100 rounded-3xl">
        <div className="w-full flex justify-start items-center  gap-2">
          <Avatar className="w-28 h-28">
            <AvatarImage src={SJ} />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div className="text-xl text-black">
            <p>Sara Joy</p>
            <p className="text-sm text-gray-800">Cooking Enthuysiast</p>
          </div>
        </div>
        <div className="px-4 pb-4 text-sm text-gray-700">
          ZeroSpoil has transformed the way I cook! Sharing recipes with fellow
          foodies and donating surplus food seamlessly—it's not just an app;
          it's a community making a real difference."
        </div>
      </div>
    </div>
  );
};

export default LoginHero;
