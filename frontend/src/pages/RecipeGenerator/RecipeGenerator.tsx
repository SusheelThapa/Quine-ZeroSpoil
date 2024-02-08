import React, { useState } from "react";
import Layout from "@/layout/Layout";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import IngredientForm from "@/components/IngredientForm";
import Recipe from "@/components/Recipe";
import CircularLoader from "@/components/CircularLoader/CircularLoader";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

export interface RecipeResponse {
  recipe: string;
  instructions: string[];
}

const RecipeGenerator = () => {
  const { toast } = useToast();
  const [ingredients, setIngredients] = useState(["", ""]);
  const [result, setResult] = useState<RecipeResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (ingredients: string[]) => {
    toast({
      variant: "recipe-generator",
      description:
        "😊 Your ingredients are magic! We'll be preparing a special recipe for you to try.",
    });
    try {
      setLoading(true);

      // Simulating an API call delay (replace this with your actual API call logic)
      const response = await axios.post(
        "http://localhost:8000/api/get_recipe/",
        ingredients
      );
      const temp: RecipeResponse = JSON.parse(response.data);

      setResult(temp);
    } catch (error) {
      console.error("Error making API call:", error);
    } finally {
      setLoading(false);

      setIngredients(["", ""]);
    }
  };

  return (
    <>
      <Layout>
        <NavBar />
        <div className="grid grid-cols-2 my-20 h-[60vh] justify-center items-center align-middle">
          <IngredientForm
            ingredients={ingredients}
            onIngredientChange={(index, value) => {
              const newIngredients = [...ingredients];
              newIngredients[index] = value;
              setIngredients(newIngredients);
            }}
            handleSubmit={() => {
              handleSubmit(ingredients);
            }}
          />
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
