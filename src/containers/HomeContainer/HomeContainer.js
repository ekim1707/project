import React from "react";
import Home from "../../components/Home";
import newService from "../../services/newService";
import { useState } from "react";
import { Button } from "semantic-ui-react";

const HomeContainer = () => {
  //   const [dataArray, setDataArray] = React.useState([]);

  //   React.useEffect(() => {
  //     newService.getAll().then((res) => setDataArray(res.data ? res.data : []));
  //   }, []);
  const [buttonFlag, setButtonFlag] = useState(false);

  const onScrollDownButtonClick = () => {
    setButtonFlag(!buttonFlag);
  };

  return (
    <Home
      buttonFlag={buttonFlag}
      onScrollDownButtonClick={onScrollDownButtonClick}
    />
  );
};

export default HomeContainer;
