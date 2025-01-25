import React from "react";
import MemeLayout from "./MemeLayout/MemeLayout";
import MemeCount from "./MemeCountDropdown/MemeCount";

const HomePage = () => {
  return (
    <div>
      <h1>ShayDay</h1>
      <p>Every day counts...</p>
      <br></br>
      <MemeLayout />
    </div>
  );
};

export default HomePage;
