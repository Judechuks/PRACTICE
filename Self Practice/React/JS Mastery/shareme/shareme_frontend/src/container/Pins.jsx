import { useState } from "react";
import { Navbar, Feed, PinDetail, CreatePin, Search } from "../components";
import { Route, Routes } from "react-router-dom";

const Pins = ({ user }) => {
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <Navbar user={user} />
      </div>
      <div className="h-full">
        <Routes>
          <Route path={"/"} element={<Feed />} />
          <Route path={"/category/:categoryId"} element={<Feed />} />
          <Route
            path={"/pin-detail/:pinId"}
            element={<PinDetail user={user} />}
          />
          <Route path={"/create-pin"} element={<CreatePin user={user} />} />
          <Route path={"/search"} element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};
export default Pins;
