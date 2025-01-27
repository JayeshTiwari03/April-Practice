import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MemeLayout.css";
import CardShimmer from "../Shimmer/CardShimmer";
import MemeCount from "../MemeCountDropdown/MemeCount";

const MemeLayout = () => {
  const [memes, setMemes] = useState([]);
  const [hasMemeCount, setHasMemeCount] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMemeCount]);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setIsLoading(true);
    axios
      .get(`https://meme-api.com/gimme/${hasMemeCount}`)
      .then(function (response) {
        setMemes((memes) => [...memes, ...response.data.memes]);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error("Error fetching memes!", error);
      })
      .finally(function () {});

      // const data = await fetch(`https://meme-api.com/gimme/${hasMemeCount}`);
      // const json = await data.json();
      // setMemes((memes) => [...memes, ...json.memes]);
  };

  return (
    <>
      <MemeCount memeCount={setHasMemeCount} hasMemeCount={hasMemeCount} />
      {!isLoading ? (
        <div className="card-container">
          {memes?.map((meme) => (
            <div className="card">
              <img
                className="meme-image"
                src={meme.preview[2]}
                alt={meme.title}
              />
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
