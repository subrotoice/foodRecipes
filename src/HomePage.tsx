import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
}

export interface MealsResponse {
  meals: Meal[];
}

function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
}

export default HomePage;
