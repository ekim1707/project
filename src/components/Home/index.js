import React from "react";
import "./styles.css";
import content from "./content";
import Image from "../../common/Image";
import { Button, Icon } from "semantic-ui-react";

const { HEADER_1, HEADER_2, BANNER_CONTENT_1, BANNER_CONTENT_2, BANNER_LINK } =
  content;

const Home = ({ buttonFlag, onScrollDownButtonClick }) => {
  return (
    <div
      className={
        buttonFlag
          ? "homeContainer homeContainerGreen"
          : "homeContainer homeContainerYellow"
      }
    >
      <Button
        icon
        className={"scrollDownButton"}
        style={{
          background: "transparent",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        onClick={() => onScrollDownButtonClick()}
      >
        <Icon name={buttonFlag ? "toggle on" : "toggle off"} size={"huge"} />
      </Button>
      <header className="headerContainer">
        <h1>{HEADER_1}</h1>
        <h3>{HEADER_2}</h3>
      </header>
      <main>
        <Image
          title={buttonFlag ? "bg-green" : "bg-yellow"}
          className={"bannerContent"}
          alt={"banner"}
          width={buttonFlag ? "400px" : "650px"}
          height={"initial"}
        />
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

export default Home;
