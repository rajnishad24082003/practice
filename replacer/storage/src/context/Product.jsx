
  // import { useContext, useState, createContext, useEffect } from "react";
  // import axios from "axios";

  // const ProductContext = createContext();

  // export const ProductProvider = ({ children }) => {
  //   const [product, setProduct] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
    
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("http://www.example.com/productData");
  //         let modifiedData = response.data.Data.map((item) => ({
  //           id: item.productData.PRODUCT_CODE,
  //           name: item.productData.PRODUCT_NAME,
  //           mainId: item._id,
  //           ...item.productData,
  //         }));

  //         if (modifiedData.length > 0) {
  //           setProduct(modifiedData);
  //         }
  //         setIsLoading(false);
  //       } catch (error) {
  //         console.log(error);
  //         setIsLoading(false);
  //       }
  //     };

  //     // Only fetch data if product is not available
  //     if (!product) {
  //       fetchData();
  //     }
  //   }, [product]); // Add "product" as a dependency to prevent unnecessary re-fetching

  //   return (
  //     <ProductContext.Provider value={{ product, isLoading }}>
  //       {children}
  //     </ProductContext.Provider>
  //   );
  // };

  // export const useProduct = () => {
  //   return useContext(ProductContext);
  // };



  import { useContext, useState, createContext, useEffect } from "react";
  import axios from "axios";

  const ProductContext = createContext();

  export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://www.example.com/productData");
          let modifiedData = response.data?.Data.map((item) => ({
            id: item.productData.PRODUCT_CODE,
            name: item.productData.PRODUCT_NAME,
            mainId: item._id,
            ...item.productData,
          }));

          if (modifiedData.length > 0) {
            setProduct(modifiedData);
          }
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };

      // Only fetch data if product is not available
      if (!product) {
        fetchData();
      }
    }, [product]); // Add "product" as a dependency to prevent unnecessary re-fetching

    return (
      <ProductContext.Provider value={{ product, isLoading }}>
        {children}
      </ProductContext.Provider>
    );
  };

  export const useProduct = () => {
    return useContext(ProductContext);
  };