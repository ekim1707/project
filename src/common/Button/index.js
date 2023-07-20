import React from "react";
import { IconComponent } from "../Icon";

const Button = ({
  className,
  iconClassName,
  onClick,
  buttonText,
  isIcon,
  iconName,
  disabled,
  buttonStyles,
}) => {
  switch (true) {
    case isIcon:
      return (
        <IconComponent
          role="button"
          onClick={onClick}
          className={className}
          iconName={iconName}
          iconStyles={buttonStyles}
        />
      );
    case iconClassName:
      return (
        <button
          className={className}
          onClick={onClick}
          style={buttonStyles}
          disabled={disabled}
        >
          <IconComponent className={iconClassName} iconName={iconName} />
          {buttonText}
        </button>
      );
    default:
      return (
        <button
          className={className}
          onClick={onClick}
          style={buttonStyles}
          disabled={disabled}
        >
          {buttonText}
        </button>
      );
  }
};

export default Button;
