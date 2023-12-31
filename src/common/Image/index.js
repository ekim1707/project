import React from "react";

const Image = ({ title, className, alt, width, height }) => {
  return (
    <React.Fragment>
      <img
        src={`${process.env.PUBLIC_URL}/img/${title}.png`}
        className={className}
        alt={alt}
        width={width}
        height={height}
      />
    </React.Fragment>
  );
};

export default Image;
