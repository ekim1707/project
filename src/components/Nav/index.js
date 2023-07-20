import React from "react";
import "./styles.scss";
import { links } from "./content";
import Tabs from "../../common/Tabs";

const Nav = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const onTabChange = (index) => setSelectedIndex(index);

  return (
    <div className="navContainer">
      <Tabs
        className="navLinksContainer"
        tabs={links}
        selectedIndex={selectedIndex}
        tabClassName="navLinks"
        onTabChange={(index) => onTabChange(index)}
        links={true}
      />
    </div>
  );
};

export default Nav;
