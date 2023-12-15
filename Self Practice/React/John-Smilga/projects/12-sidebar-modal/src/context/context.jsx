import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
        isSidebarOpen,
        isModalOpen,
      }}>
      {children}
    </AppContext.Provider>
  );
};

// creating custom hook; so that we won't have to import useContext, and AppCpntext on every component that will want to use them
export const useGlobalContext = () => {
  return useContext(AppContext);
};

// export {AppContext, AppProvider}
