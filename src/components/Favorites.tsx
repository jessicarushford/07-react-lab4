import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import Card from "./Card";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="Favorites">
      {favorites.map((favorite) => {
        return <Card singleGif={favorite} key={favorite.id} />;
      })}
    </div>
  );
};

export default Favorites;
