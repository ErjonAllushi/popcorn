import React, { useState } from "react";
import ReactDOM from "react-dom";
import StarRating from "./StartRating";

function Test({}) {
  const [movieRating, setMovieRating] = useState(0);

  const handleRatingClick = (rating) => {
    setMovieRating(rating);
  };

  return (
    <div>
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
        color="yellow"
        size={25}
        onClick={handleRatingClick}
      />

      <p>This movie was rated {movieRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
