import { createContext, useContext, useState } from "react";
import sublinks from "../components/data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        isSidebarOpen,
        isSubmenuOpen,
        location,
        page,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
