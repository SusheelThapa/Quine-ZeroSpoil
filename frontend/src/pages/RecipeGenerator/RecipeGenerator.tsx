import Layout from "@/layout/Layout";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import Recipe from "@/components/Recipe";
import IngredientForm from "@/components/Ingredient/IngredientForm";

const RecipeGenerator = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <div className="grid grid-cols-2 my-24">
          <IngredientForm />
          <Recipe />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default RecipeGenerator;
