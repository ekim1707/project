import React from "react";
import { Button } from "../Button";

const PopUps = ({
  className,
  popUpsStyles,
  popUpsContentClassName,
  popUpsContent,
  isCloseable,
  onClick,
}) => {
  const defaultStyles = {
    position: "fixed",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    background: "white",
    opacity: "95%",
    zIndex: "10000000",
  };

  return (
    <div className={className} style={{ ...defaultStyles, ...popUpsStyles }}>
      {isCloseable && (
        <Button
          className="popUpsCloseButtonContainer"
          iconClassName="popUpsCloseIcon"
          onClick={onClick}
          isIcon
          iconName="close"
          buttonStyles={{
            position: "absolute",
            right: "1em",
            top: "1em",
            width: "50px",
            height: "50px",
          }}
        />
      )}
      <div className={popUpsContentClassName}>{popUpsContent}</div>
    </div>
  );
};

export default PopUps;
