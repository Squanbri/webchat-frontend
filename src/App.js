import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from 'mobx-react-lite';

import { Context } from "./index";
import Messages from "./pages/Messages/Messages";
import Profile from "./pages/Profile/Profile";
import About from "./pages/About/About";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";
import SideBar from "./UI/SideBar";
import Footer from "./UI/Footer";
import Errors from "./UI/Errors";
import "./styles/App.css";

const App = observer(() => {
  const { auth } = useContext(Context);

  return (
    <BrowserRouter>
      <Errors/>

      <SideBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        {auth.isAuth 
          ? (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
            </>
          ) : (
            <>
              <Route path="/auth" element={<Auth />} />
              <Route path="/messages" element={<Main />} />
            </>
          )
        }
        
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
});

export default App;
