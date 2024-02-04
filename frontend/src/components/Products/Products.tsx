import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { GiPowerGenerator } from "react-icons/gi";
import { MdOutlineInventory } from "react-icons/md";
import { CgCommunity } from "react-icons/cg";
import { ImSpoonKnife } from "react-icons/im";

const products = [
  {
    title: "Recipe Generator",
    icon: <GiPowerGenerator className="text-red-500" size={65} />,
    description:
      " Transforms your remaining ingredients into personalized delightful recipes, minimizing food waste and maximizing culinary creativity.",
    link: "/recipe-generator",
  },
  {
    title: "Expiry Date Tracker ",
    icon: <MdOutlineInventory className="text-green-600" size={65} />,
    description:
      "Ensures you never miss a beat, providing timely alerts on approaching expiration dates, empowering you to use ingredients efficiently and reduce food waste",
    link: "/expiry-track",
  },
  {
    title: "Community Hub",
    icon: <CgCommunity className="text-blue-600" size={65} />,
    description:
      "Engage in a culinary community, sharing recipes and daily meals, fostering inspiration and camaraderie among cooking enthusiasts.",
  },
  {
    title: "Donate Food",
    icon: <ImSpoonKnife className="text-slate-400" size={65} />,
    description:
      "Make a positive impact by easily donating surplus food to local charities, connecting with those in need and promoting a culture of giving back.",
    link: "/donate-food",
  },
];

const Products = () => {
  return (
    <div className="mt-28 flex flex-col justify-center items-center gap-10">
      <div className="text-5xl">Our Products</div>
      <div className="w-4/5 text-center text-lg text-gray-500">
        Step into a world of delightful cooking with ZeroSpoil! Share your go-to
        recipes, discover mouthwatering creations from our vibrant community,
        and make a difference by effortlessly donating surplus food. Join us in
        creating a kitchen where waste is minimized, flavors are maximized, and
        kindness is the secret ingredient.
      </div>
      <div className="my-10 flex gap-20 justify-center items-center">
        {products.map((product, index) => {
          return (
            <Link to={product.link ? product.link : "#"}>
              <Card
                className="w-80 h-96 hover:shadow-xl hover:transform hover:scale-105  transition flex justify-center items-center flex-col cursor-pointer rounded-3xl"
                key={index}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center flex-col gap-8">
                    {product.icon}
                    <span className="text-center">{product.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-500">
                  {product.description}
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
