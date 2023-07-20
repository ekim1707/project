import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";

const Tabs = ({
  className,
  tabs,
  selectedIndex,
  tabClassName,
  onTabChange,
  iconClassName,
  isIcon,
  iconName,
  disabled,
  links,
}) => {
  return (
    <div className={className}>
      {tabs.map((tabName, i) => {
        return links ? (
          <NavLink
            exact
            to={
              tabName === "Home"
                ? "/"
                : `/${tabName.toLowerCase().split(" ").join("")}`
            }
            className={tabClassName}
            key={i}
          >
            {tabName}
          </NavLink>
        ) : (
          <Button
            className={
              i === selectedIndex ? `${tabClassName} selected` : tabClassName
            }
            onClick={() => onTabChange(i)}
            iconClassName={iconClassName}
            buttonText={tabName}
            isIcon={isIcon}
            iconName={iconName}
            disabled={disabled}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Tabs;
