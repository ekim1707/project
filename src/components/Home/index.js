import React from "react";
import "./styles.scss";
import content from "./content";

const Home = () => {
  return (
    <div className="homeComponentContainer">
      <img src={`${process.env.PUBLIC_URL}/img/work_in_progress.png`} />
    </div>
  );
};

export default Home;
