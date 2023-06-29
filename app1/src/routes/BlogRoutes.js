import React from "react";

import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import InicioView from "../views/InicioView";
import BlogPostView from "../views/BlogPostView";
import SobreView from "../views/SobreView";
import BlogPostDetails from "../views/BlogPostDetailsView";


function BlogRoutes(props) {
  return (
    <Router>
      {props.children}
      <Routes>
        <Route path="/" element={<InicioView />}></Route>
        <Route path="/inicio" element={<InicioView />}></Route>
        <Route path="/blog" element={<BlogPostView />}></Route>
        <Route path="/sobre" element={<SobreView />}></Route>
        <Route path="/blog/:id/:seoTitle" element={<BlogPostDetails/>}></Route> 
      </Routes>
    </Router>
  );

}


export default BlogRoutes;