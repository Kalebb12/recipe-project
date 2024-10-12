import Banner from "../components/banner";
import RecipeCard from "../components/recipeCard";

const Homepage = () => {
  return (
    <div>
      <Banner>
        Get inspired, cook with passion and enjoy <br /> unforgettable moments
        at the table.
      </Banner>
      <RecipeCard/>
    </div>
  );
};

export default Homepage;
