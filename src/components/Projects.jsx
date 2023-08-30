import styled from "styled-components";
import SingleProject from "./SingleProject";

import { projects_data } from "../data/data";

const Projects = () => {
  return (
    <>
      {projects_data.map((project) => {return <SingleProject key={project.id} {...project}/>})}
    </>
  );
};

export default Projects;
