import React from "react";
import "./styles.css";

const FeaturedMovie = () => {
  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/4eca8ced-4341-4a29-b99a-05c233b193c9/PK-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg)`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">Stranger Things</div>
          <div className="featured--info">
            <div className="featured--points">8.7 Points</div>
            <div className="featured--year">2013</div>
            <div className="featured--seasons">4 Season</div>
          </div>
          <div className="featured--description">
            In 1980s Indiana, a group of young friends witness supernatural
            forces and secret government exploits. As they search for answers,
            the children unravel a series of extraordinary mysteries.
          </div>
          <div className="featured--buttons">
            <a href={`/watch/`} className="featured--watchbutton">
              ► Play
            </a>
            <a href={`/list/add/`} className="featured--mylistbutton">
              + My List
            </a>
          </div>
          <div className="featured--genres">
            Genres:{" "}
            <strong>Science Fiction, Horror, Drama, Television series </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedMovie;
