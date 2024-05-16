import React, { useState, useEffect } from "react";
import "./styles.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import stranger from "../../assets/images/stranger.jpg";
import wednesday from "../../assets/images/wednesday.jpeg";
import witcher from "../../assets/images/Witcher.webp";

const MovieRow = ({ title }) => {
  const [scrollX, setScrollX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleLeftArrow = () => {
    const listWidth = isMobile ? window.innerWidth : 150;
    let x = scrollX + listWidth;
    const minX = 0;
    if (x > minX) {
      x = minX;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    const listWidth = isMobile ? window.innerWidth : 150;
    const maxScroll = -(
      listWidth *
      (document.querySelectorAll(".movieRow--item").length - 1)
    );
    let x = scrollX - listWidth;

    if (x < maxScroll) {
      x = maxScroll;
    }

    setScrollX(x);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow-right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            transform: `translateX(${scrollX}px)`,
          }}
        >
          <div className="movieRow--item">
            <img src={stranger} alt="Stranger" />
          </div>
          <div className="movieRow--item">
            <img src={wednesday} alt="Stranger" />
          </div>
          <div className="movieRow--item">
            <img src={witcher} alt="Stranger" />
          </div>
          {/* Add more images here */}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
