import React from "react";
import "./styles.css";
import { Button, Icon } from "semantic-ui-react";
import ContentPage from "./components/ContentPage";

const Home = ({ buttonFlag, setButtonFlag }) => {
  console.log(buttonFlag);
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
          <div style={{ paddingTop: "10px" }}>Now click here!</div>
        </Button>
      )}
      <ContentPage buttonFlag={buttonFlag} />
    </div>
  );
};

export default Home;
