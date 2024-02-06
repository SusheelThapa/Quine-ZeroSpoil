import { useState } from "react";
import { useToast } from "../ui/use-toast";

interface Props {
  onSubmit: (ingredients: string[]) => void;
}
const RecipeForm = ({ onSubmit }: Props) => {
  const { toast } = useToast();

  const [ingredients, setIngredients] = useState(["", ""]);

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleAddIngredient = () => {
    if (ingredients.length < 6) setIngredients([...ingredients, ""]);
  };
  const handleRemoveIngredient = () => {
    if (ingredients.length > 2) {
      const newIngredients = [...ingredients];
      newIngredients.splice(ingredients.length - 1, ingredients.length);
      setIngredients(newIngredients);
    }
  };

  return (
    <div className="ml-20 p-6 max-w-xl flex flex-col  gap-4 ">
      <h2 className="text-4xl font-bold mb-4">
        Avaliable{" "}
        <span className="text-orange-400 underline">Ingredients...</span>
      </h2>
      {ingredients.map((ingredient, index) => (
        <div className="flex gap-5">
          <input
            key={index}
            className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            placeholder={`Ingredient ${index + 1}`}
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
          />
        </div>
      ))}
      <div className="flex justify-center items-center gap-10">
        <button
          onClick={handleAddIngredient}
          className="w-1/2 px-3 py-2 mt-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
        >
          + Add Ingredient
        </button>
        <button
          onClick={handleRemoveIngredient}
          className="w-1/2 px-3 py-2 mt-2 text-white bg-red-500 rounded-md focus:outline-none hover:bg-red-600"
        >
          - Remove
        </button>
      </div>
      <button
        onClick={() => {
          toast({
            variant: "recipe-generator",
            description:
              "😊 Your ingredients are magic! We'll be preparing a special recipe for you to try.",
          });
          onSubmit(ingredients);
        }}
        className=" px-3 py-2 mt-4 text-white text-xl font-extrabold  bg-green-500 rounded-md focus:outline-none hover:bg-green-600"
      >
        Submit
      </button>
    </div>
  );
};

export default RecipeForm;
