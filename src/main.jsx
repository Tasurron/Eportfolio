import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import MainLayout from "./components/mainLayout/MainLayout.jsx";
import Home from "./components/home/Home.jsx";
import Education from "./components/education/Education.jsx";
import Skill from "./components/skill/Skill.jsx";
import Projects from "./components/projects/Projects.jsx";
import ProjectDetails from "./components/projects/ProjectDetails.jsx";
import ContactUs from "./components/contactUs/ContactUs.jsx";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="education" element={<Education />} />
        <Route path="skill" element={<Skill />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
