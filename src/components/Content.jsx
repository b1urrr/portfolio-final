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
};

export default Content;
