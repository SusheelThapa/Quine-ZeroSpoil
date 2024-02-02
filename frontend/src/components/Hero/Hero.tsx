import HeroImage from "@/assets/img/hero.jpg";

const Hero = () => {
  return (
    <div className="mx-auto m-10 flex gap-24 justify-evenly  items-center h-[60vh] ">
      <div className="p-4 flex flex-col gap-5 justify-center w-1/2 ">
        <div className="text-8xl font-extrabold">
          <span className="text-green-500">Zero</span>
          <span className="text-red-400">Spoil</span>
        </div>
        <div className="text-4xl font-normal">
          Effortless Food Waste Reduction
        </div>
        <p className="text-wrap text-gray-500 text-lg">
          ZeroSpoil is a user-friendly application designed to simplify
          sustainability in your daily culinary journey.ZeroSpoil transforms
          every meal into a mindful and delicious contribution to a greener
          world.
        </p>
      </div>
      <div className=" flex justify-center items-center ">
        <img src={HeroImage} alt={"Vegetables"} width={360} />
      </div>
    </div>
  );
};

export default Hero;
