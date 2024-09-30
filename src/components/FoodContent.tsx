import { Meal } from "../HomePage";
import MealCard from "./MealCard";

interface Props {
  meals: Meal[];
}

const FoodContent = ({ meals }: Props) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-10 py-1 mx-auto">
        <div className="flex flex-wrap -m-4">
          {meals.map((meal) => (
            <MealCard meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodContent;
