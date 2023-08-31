import styled from "styled-components";
import SingleProject from "./SingleProject";

import { projects_data } from "../data/data";

const Projects = () => {
  return (
    <section>
      {projects_data.map((project) => {return <SingleProject key={project.id} {...project}/>})}
    </section>
  );
};

export default Projects;
