import React, { useEffect, useState } from "react";
import "./App.css";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

const App = () => {
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true);
      } else {
        setblackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      <FeaturedMovie />
      <section className="lists">
        <MovieRow title={"Trending"}></MovieRow>
        <MovieRow title={"Top Movies"}></MovieRow>
        <MovieRow title={"Seasons"}> </MovieRow>
      </section>
      <footer>
        Ready to watch? Enter your email to create or restart your membership.
      </footer>
    </div>
  );
};
export default App;
