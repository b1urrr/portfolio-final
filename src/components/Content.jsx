import styled from "styled-components";
import Projects from "./Projects";

const Content = ({displayedContent}) => {

    if (!displayedContent) {
        return
    }
    if (displayedContent === 'projects' ) {
        return <Projects />
    }
    if (displayedContent === 'skills') {
        return <div>Skills</div>
    }
    if (displayedContent === 'cv') {
        return <div>Download CV</div>
    }
};

export default Content;
