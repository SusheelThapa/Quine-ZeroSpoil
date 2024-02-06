import Layout from "@/layout/Layout";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import Recipe from "@/components/Recipe";
import IngredientForm from "@/components/Ingredient/IngredientForm";
import CircularLoader from "@/components/CircularLoader/CircularLoader";
import { useState } from "react";

export interface RecipeResponse {
  recipe: string;
  instructions: string[];
}
const RecipeGenerator = () => {
  const [result, setResult] = useState<RecipeResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (ingredients: string[]) => {
    try {
      setLoading(true);

      console.log(ingredients);

      // Simulating an API call delay (replace this with your actual API call logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulated API response data (replace this with your actual API response data)
      setResult({
        recipe: "Delicious Recipe",
        instructions: [
          "Mix the ingredients together",
          "Cook on medium heat for 20 minutes",
          "Serve and enjoy!",
        ],
      });
    } catch (error) {
      console.error("Error making API call:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Layout>
        <NavBar />
        <div className="grid grid-cols-2 my-20 h-[60vh] justify-center items-center align-middle">
          <IngredientForm onSubmit={handleSubmit} />
          {loading ? (
            <CircularLoader />
          ) : result != null ? (
            <Recipe result={result} />
          ) : (
            <div className="flex flex-col gap-5 font-extrabold justify-center items-center text-center p-8 bg-white ">
              <div className="text-5xl text-green-500 font-bold underline-offset-auto underline ">
                Recipe Generator
              </div>
              <div className="text-gray-500 text-lg max-w-md mx-auto mt-4">
                Discover the magic of flavors with our quick recipe generator.
                Create delightful meals in no time and savor the culinary
                experience!
              </div>
            </div>
          )}
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default RecipeGenerator;
