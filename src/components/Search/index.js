import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Cocktails from "./Cocktails";
import Footer from "../home/Footer";
import bg2 from "../../images/bg2.jpg";

function Search() {
  const [term, setTerm] = useState("margarita");
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    const fetchDrinks = async () => {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
      );

      setDrinks(res.data.drinks);
    };

    fetchDrinks();
  }, []);

  const searchTerm = async () => {
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
    );

    setDrinks(res.data.drinks);
  };

  return (
    <div>
      <Parallax bgImage={bg2} strength={300}>
        <Fade bottom>
          <div className="search-box">
            <div className="heading">
              <h1>Find your unique cocktail</h1>
            </div>
            <div className="actual-search-box">
              <input
                type="text"
                placeholder="Look up Drinks"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
              />
              <button onClick={searchTerm}>
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </Fade>
      </Parallax>
      <Cocktails cocktails={drinks} />
      <Footer />
    </div>
  );
}

export default Search;
