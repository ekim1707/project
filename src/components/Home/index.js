import React from "react";
import "./styles.css";
import content from "./content";
import Image from "../../common/Image";
import Icon from "../../common/Icon";

const { HEADER_1, HEADER_2, BANNER_CONTENT_1, BANNER_CONTENT_2, BANNER_LINK } =
  content;

const Home = () => {
  return (
    <div className="homeContainer">
      <header className="headerContainer">
        <h1>{HEADER_1}</h1>
        <h3>{HEADER_2}</h3>
      </header>
      <main>
        <Image
          title={"banner"}
          className={"bannerContent"}
          alt={"banner"}
          width={"650px"}
          height={"initial"}
        />
        <Icon
          className={"bannerIcon"}
          iconName={"work_in_progress"}
          iconStyles={{
            width: "50px",
            height: "50px",
          }}
        />
        <h2>{BANNER_CONTENT_1}</h2>
        <h2>{BANNER_CONTENT_2}</h2>
        <a href="" className="link">
          {BANNER_LINK}
        </a>
      </main>
    </div>
  );
};

export default Home;
