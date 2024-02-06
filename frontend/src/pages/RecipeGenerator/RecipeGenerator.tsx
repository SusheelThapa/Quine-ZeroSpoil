import Layout from "@/layout/Layout";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import Recipe from "@/components/Recipe";
import IngredientForm from "@/components/Ingredient/IngredientForm";
import CircularLoader from "@/components/CircularLoader/CircularLoader";
import { useState } from "react";

const RecipeGenerator = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (ingredients: string[]): void => {
    console.log(ingredients);
    setLoading(true);
    // TODO: API CALL
  };

  return (
    <>
      <Layout>
        <NavBar />
        <div className="grid grid-cols-2 my-20 h-[60vh] justify-center items-center align-middle">
          <IngredientForm onSubmit={handleSubmit} />
          {loading ? <CircularLoader /> : <Recipe />}
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default RecipeGenerator;
