import { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
const GroupMasterContext = createContext();
export const GroupMasterProvider = ({ children }) => {
  const [GroupMaster, setGroupMaster] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let dataFromDataBase = await axios.get("http://www.example.com/groupData");
      let modifiedData = [];
      for (let i = 0; i < dataFromDataBase.data.Data.length; i++) {
        modifiedData.push({
          id: dataFromDataBase.data.Data[i]?.groupData?.Group_Code,
          name: dataFromDataBase.data.Data[i]?.groupData?.Group_Name,
          mainId: dataFromDataBase.data.Data[i]._id,
          ...dataFromDataBase.data.Data[i]?.groupData,
        });
      }
      setGroupMaster(modifiedData);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <GroupMasterContext.Provider value={{ GroupMaster, isLoading }}>
      {children}
    </GroupMasterContext.Provider>
  );
};

export const useGroupMaster = () => {
  return useContext(GroupMasterContext);
};
