import React, { useState } from "react";

const MemeCount = ({ memeCount, hasMemeCount }) => {
  const onSelect = (e) => {
    memeCount(e.target.value);
    console.log("selected", e.target.value);
  };

  return (
    <div>
      <label for="count">Select number of memes</label>
      <select
        name="count"
        id="count"
        value={hasMemeCount}
        onChange={(e) => onSelect(e)}
      >
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default MemeCount;
