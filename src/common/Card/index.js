import React from "react";

const Card = ({
  title,
  cardStyles,
  labelColor,
  contentStyle,
  contentArray,
}) => {
  const defaultCardStyles = {
    background: "white",
    border: "1px solid lightgray",
    borderRadius: "15px",
    boxShadow:
      "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    width: "400px",
    height: "400px",
    margin: "10px 10px 0 0",
    fontSize: "18px",
  };

  switch (contentStyle) {
    case "p":
      return (
        <div style={{ ...defaultCardStyles, ...cardStyles }}>
          <h4 style={{ color: labelColor }}>{title}</h4>
          {contentArray.map(({ content, href }, i) =>
            href ? (
              <a href={href} target="_blank" rel="noreferrer" key={i}>
                <p>{content}</p>
              </a>
            ) : (
              <p key={i}>{content}</p>
            )
          )}
        </div>
      );
    case "ul":
      return (
        <ul style={{ ...defaultCardStyles, ...cardStyles }}>
          <h4 style={{ color: labelColor }}>{title}</h4>
          {contentArray.map(({ content, href }, i) =>
            href ? (
              <a href={href} target="_blank" rel="noreferrer" key={i}>
                <li style={{ padding: "0 5px 0 0" }}>{content}</li>
              </a>
            ) : (
              <li style={{ padding: "0 5px 0 0" }} key={i}>
                {content}
              </li>
            )
          )}
        </ul>
      );
    case "img":
      return (
        <div
          style={{
            ...defaultCardStyles,
            ...cardStyles,
            background: `url("../../img/${contentArray[2]}.png") ${contentArray[0]} ${contentArray[1]} / cover no-repeat`,
          }}
        ></div>
      );
    default:
      return "";
  }
};

export default Card;
