import React, { useState } from "react";

const MemeLayout = () => {
  const [memes, setMemes] = useState([]);
  const fetchMemes = () => {
    try {
    } catch (error) {
      console.error("Error fetching memes!");
    }
  };

  return <div>MemeLayout</div>;
};

export default MemeLayout;
