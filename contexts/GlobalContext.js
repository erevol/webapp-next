import React, { createContext, useContext } from 'react';
import useApiData from '@/hooks/useApiData';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalContextProvider = ({ children }) => {
  const apiData = useApiData();

  return (
    <GlobalContext.Provider value={{
      title: apiData?.title,
      description: apiData?.description,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
