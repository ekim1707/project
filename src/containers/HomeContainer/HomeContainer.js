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
  const [buttonFlag, setButtonFlag] = useState(0);

  return <Home buttonFlag={buttonFlag} setButtonFlag={setButtonFlag} />;
};

export default HomeContainer;
