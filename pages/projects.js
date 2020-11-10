import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  return (
    <Layout>
      <Header isStatic />
      <Projects source="PROJECTS" />
    </Layout>
  );
};

export default ProjectsPage;
