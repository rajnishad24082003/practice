import { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";

const ItemMasterContext = createContext();
export const ItemMasterProvider = ({ children }) => {
  const [ItemMaster, setItemMaster] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let dataFromDataBase = await axios.get("http://www.example.com/itemData");
      let modifiedData = [];

      if (dataFromDataBase.data.Data) {
        for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
          modifiedData.push({
            id: dataFromDataBase.data.Data[i].itemData?.Item_Code,
            name: dataFromDataBase.data.Data[i].itemData?.Item_Name,
            mainId: dataFromDataBase.data.Data[i]._id,
            ...dataFromDataBase.data.Data[i].itemData,
          });
        }
      }
      setItemMaster(modifiedData);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <ItemMasterContext.Provider value={{ ItemMaster, isLoading }}>
      {children}
    </ItemMasterContext.Provider>
  );
};

export const useItemMaster = () => {
  return useContext(ItemMasterContext);
};
