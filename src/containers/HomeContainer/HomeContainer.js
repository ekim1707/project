import React from "react";
import Home from "../../components/Home";
import newService from "../../services/newService";

const HomeContainer = () => {
  //   const [dataArray, setDataArray] = React.useState([]);

  //   React.useEffect(() => {
  //     newService.getAll().then((res) => setDataArray(res.data ? res.data : []));
  //   }, []);

  return <Home />;
};

export default HomeContainer;
