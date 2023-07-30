import React from "react";
import "./styles.css";
import { Button, Grid, Header, Icon, Image } from "semantic-ui-react";
import content from "./content";

const Home = ({ buttonFlag, setButtonFlag }) => {
  const {
    HEADER_1,
    HEADER_2,
    BANNER_CONTENT_1,
    BANNER_CONTENT_2,
    BANNER_LINK,
    CLICK_HERE_LABEL,
    SPOON_LABEL,
  } = content;

  const backgroundColorArray = ["bg-yellow", "bg-green", "bg-blue"];
  return (
    <Grid
      columns={1}
      style={{
        height: "100vh",
        transition: "all 1s ease",
        position: "relative",
        textAlign: "center",
      }}
    >
      <Grid.Row>
        <Grid.Column>
          <div
            className={`${backgroundColorArray[buttonFlag]}`}
            style={{ height: "100%" }}
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
                <Icon
                  name={buttonFlag === 2 ? "circle" : "spoon"}
                  size={"huge"}
                />
                <div style={{ paddingTop: "10px" }}>{CLICK_HERE_LABEL}</div>
              </Button>
            )}
            <header className="headerContainer">
              <Header as="h1">{HEADER_1}</Header>
              <Header as="h3">{HEADER_2}</Header>
            </header>
            <main>
              <div
                style={
                  buttonFlag > 0
                    ? {
                        display: "flex",
                        flexFlow: "row nowrap",
                        justifyContent: "space-evenly",
                        width: "100%",
                      }
                    : {}
                }
              >
                <div style={buttonFlag === 2 ? { paddingTop: "100px" } : {}}>
                  <Image
                    src={`${process.env.PUBLIC_URL}/img/${backgroundColorArray[buttonFlag]}.png`}
                    size="large"
                    style={{ margin: "auto" }}
                  />
                </div>
                {buttonFlag < 2 && (
                  <div className="createColumnDiv">
                    <Header as="h2">{BANNER_CONTENT_1}</Header>
                    <Header as="h2">{BANNER_CONTENT_2}</Header>
                    {/* This should be a link */}
                    <Header as="h2">{BANNER_LINK}</Header>
                  </div>
                )}
              </div>
              {buttonFlag === 2 && (
                <Header as="h1" style={{ padding: "50px" }}>
                  {SPOON_LABEL}
                </Header>
              )}
            </main>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;
