import styled from "styled-components";
import { Skills, Projects } from "./";

const Content = ({ displayedContent }) => {
  if (!displayedContent) {
    return;
  }
  if (displayedContent === "projects") {
    return <Projects />;
  }
  if (displayedContent === "skills") {
    return <Skills />;
  }
  if (displayedContent === "cv") {
    return <div>Download CV</div>;
  }
};

export default Content;
