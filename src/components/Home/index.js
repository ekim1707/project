import React from "react";
import "./styles.css";
import { Button, Icon } from "semantic-ui-react";
import content from "./content";
import Image from "../../common/Image";

const Home = ({ buttonFlag, setButtonFlag }) => {
  const {
    HEADER_1,
    HEADER_2,
    BANNER_CONTENT_1,
    BANNER_CONTENT_2,
    BANNER_LINK,
    CLICK_HERE_LABEL,
  } = content;
  return (
    <div
      className={
        buttonFlag == 2
          ? "homeContainer homeContainerGreen homeContainerBlue"
          : buttonFlag == 1
          ? "homeContainer homeContainerGreen"
          : "homeContainer homeContainerYellow"
      }
    >
      {buttonFlag < 2 && (
        <Button
          icon
          className="scrollDownButton"
          style={{
            background: "transparent",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          onClick={() => setButtonFlag(buttonFlag === 0 ? 1 : 0)}
        >
          <Icon
            name={buttonFlag === 1 ? "toggle on" : "toggle off"}
            size={"huge"}
          />
        </Button>
      )}
      {buttonFlag > 0 && (
        <Button
          icon
          className="moveScreenLeftRight"
          style={{
            background: "transparent",
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
          onClick={() => setButtonFlag(buttonFlag === 1 ? 2 : 1)}
        >
          <Icon name={buttonFlag === 2 ? "circle" : "spoon"} size={"huge"} />
          <div style={{ paddingTop: "10px" }}>{CLICK_HERE_LABEL}</div>
        </Button>
      )}
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
    </div>
  );
};

export default Home;
