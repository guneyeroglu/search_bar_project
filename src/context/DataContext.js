import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [myData, setMyData] = useState([]);
  const myUrl = "https://restcountries.com/v2/all";

  useEffect(() => {
    const myFetchData = async () => {
      const response = await axios.get(myUrl);
      setMyData(response.data);
    };

    myFetchData();
  }, []);

  const values = { myData, setMyData };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;
