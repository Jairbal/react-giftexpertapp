import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExperApp = () => {
  const [categories, setCategories] = useState(["Spiderman"]);

  return (
    <>
      <h2>GifExperApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
        ))}
      </ol>
    </>
  );
};

export default GifExperApp;
