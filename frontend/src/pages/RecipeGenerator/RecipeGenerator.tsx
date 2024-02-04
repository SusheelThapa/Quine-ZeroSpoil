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
        <div className="grid grid-cols-2 my-20 h-[60vh] justify-center items-center align-middle">
          <IngredientForm />
          <Recipe />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default RecipeGenerator;
