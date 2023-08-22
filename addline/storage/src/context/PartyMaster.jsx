import { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";

const PartyMasterContext = createContext();

export const PartyMasterProvider = ({ children }) => {
  const [PartyMaster, setPartyMaster] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://www.example.com/partyData");
        let modifiedData = response.data.Data.map((item) => ({
          id: item.partyData.Ac_Code,
          name: item.partyData.Ac_Name,
          mainId: item._id,
          ...item.partyData,
        }));

        if (modifiedData.length > 0) {
          setPartyMaster(modifiedData);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    // Only fetch data if PartyMaster is not available
    if (PartyMaster.length === 0) {
      fetchData();
    }
  }, [PartyMaster]); // Add "PartyMaster" as a dependency to prevent unnecessary re-fetching

  return (
    <PartyMasterContext.Provider value={{ PartyMaster, isLoading }}>
      {children}
    </PartyMasterContext.Provider>
  );
};

export const usePartyMaster = () => {
  return useContext(PartyMasterContext);
};
