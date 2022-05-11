import React, { useEffect } from "react";
import Listing from "./components/Listing";
import ListingForm from "./components/form";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { atom, useRecoilState } from "recoil";

import CssBaseline from "@mui/material/CssBaseline";

import ResponsiveAppBar from "./components/NavBar";
import Splash from "./pages/splash";
const axios = require("axios").default;

const userState = atom({
  key: "user",
  default: [],
})

export default function Application() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`/login/1`);
      setUser(res.data); 
    }
  }, [])

  return (
    <>
      <main>
        <BrowserRouter>
            <CssBaseline />
            <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/createlisting" element={<ListingForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}
