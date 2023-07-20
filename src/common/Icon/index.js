import React from "react";

const IconComponent = ({
  className,
  iconName,
  role,
  href,
  iconStyles,
  onClick,
}) => {
  const defaultStyles = {
    width: "25px",
    height: "25px",
    background: `url("../../img/${iconName}.png") 0% 0% / contain no-repeat`,
    backgroundSize: "cover",
  };

  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      <div
        role={role ? role : ""}
        className={className}
        style={{ ...defaultStyles, ...iconStyles }}
      ></div>
    </a>
  ) : (
    <div
      role={role ? role : ""}
      onClick={onClick}
      className={className}
      style={{ ...defaultStyles, ...iconStyles }}
    ></div>
  );
};

export default IconComponent;
