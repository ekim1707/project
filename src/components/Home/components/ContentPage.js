import React from "react";
import Image from "../../../common/Image";
import content from "./content";

const ContentPage = ({ buttonFlag }) => {
  const {
    HEADER_1,
    HEADER_2,
    BANNER_CONTENT_1,
    BANNER_CONTENT_2,
    BANNER_LINK,
  } = content;
  return (
    <div>
      <header className="headerContainer">
        <h1>{HEADER_1}</h1>
        <h3>{HEADER_2}</h3>
      </header>
      <main>
        <div style={buttonFlag === 2 ? { paddingTop: "200px" } : {}}>
          <Image
            title={
              buttonFlag === 2
                ? "bg-blue"
                : buttonFlag === 1
                ? "bg-green"
                : "bg-yellow"
            }
            className={"bannerContent"}
            alt={"banner"}
            width={"650px"}
            height={"initial"}
          />
        </div>
        <div className="createColumnDiv">
          <h2>{BANNER_CONTENT_1}</h2>
          <h2>{BANNER_CONTENT_2}</h2>
          {/* This should be a link */}
          <h2>{BANNER_LINK}</h2>
        </div>
      </main>
    </div>
  );
};

export default ContentPage;
