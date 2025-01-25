import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MemeLayout.css";
import CardShimmer from "../Shimmer/CardShimmer";

const MemeLayout = () => {
  const [memes, setMemes] = useState([]);
  const [memeCount, setMemeCount] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = () => {
    setIsLoading(true);
    axios
      .get(`https://meme-api.com/gimme/${memeCount}`)
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
      {!isLoading ? (
        <div className="card-container">
          {memes?.map((meme) => (
            <div className="card">
              {meme.title}
              {meme.author}
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
