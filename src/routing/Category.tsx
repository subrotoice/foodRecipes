import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Meal, MealsResponse } from "../HomePage";
import FoodContent from "../components/FoodContent";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Category = () => {
  const [meals, setMeal] = useState<Meal[]>([]);
  const { slag } = useParams();
  useEffect(() => {
    axios
      .get<MealsResponse>(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + slag
      )
      .then((res) => setMeal(res.data.meals)) // Success or No Error
      .catch((err) => console.log(err.message)); // Fail or Error
  }, [slag]);
  console.log(meals);
  return (
    <div>
      <NavBar />
      <FoodContent meals={meals} />
      <Footer />
    </div>
  );
};

export default Category;
