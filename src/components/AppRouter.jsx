import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="posts" element={<Posts />} />
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;