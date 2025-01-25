import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MemeLayout.css";
import CardShimmer from "../Shimmer/CardShimmer";
import MemeCount from "../MemeCountDropdown/MemeCount";

const MemeLayout = () => {
  const [memes, setMemes] = useState([]);
  const [hasMemeCount, setHasMemeCount] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMemes();
  }, [hasMemeCount]);

  const fetchMemes = () => {
    setIsLoading(true);
    axios
      .get(`https://meme-api.com/gimme/${hasMemeCount}`)
      .then(function (response) {
        setMemes(response.data.memes);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching memes!", error);
      })
      .finally(function () {});
  };

  return (
    <>
      <MemeCount memeCount={setHasMemeCount} hasMemeCount={hasMemeCount} />
      {!isLoading ? (
        <div className="card-container">
          {memes?.map((meme) => (
            <div className="card">
              {meme.title}
              <img src={meme.preview[0]} alt={meme.title} />
            </div>
          ))}
        </div>
      ) : (
        <CardShimmer />
      )}
    </>
  );
};

export default MemeLayout;
