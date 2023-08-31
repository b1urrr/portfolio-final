import { useState } from "react";
import styled from "styled-components";
import Content from "./Content";

const Menu = () => {
  const [displayedContent, setDisplayedContent] = useState("projects");
  return (
    <>
      <Wrapper>
        <button
          className={displayedContent === "projects" ? "btn active" : "btn"}
          onClick={() => setDisplayedContent("projects")}
        >
          Projects
        </button>
        <button
          className={displayedContent === "skills" ? "btn active" : "btn"}
          onClick={() => setDisplayedContent("skills")}
        >
          Skills
        </button>
      </Wrapper>
      <Content displayedContent={displayedContent} />
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  max-width: fit-content;
  padding: 0.55rem;
  background-color: var(--mediumColor);
  border-radius: 10px;
  margin-top: 3rem;
  .btn {
    margin: 0 0.25rem;
    border: none;
    outline: none;
    background-color: var(--backgroundColor);
    color: var(--textColor);
    width: 150px;
    height: 35px;
    border-radius: 10px;
    font-family: var(--font-family);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: var(--transition);

    cursor: pointer;
  }
  .btn:hover {
    background-color: var(--textColor);
    color: var(--backgroundColor);
  }
  .active {
    background-color: var(--textColor);
    color: var(--backgroundColor);
  }
  @media screen and (max-width: 960px) {
    margin: 3rem auto 0 auto;
    max-width: 90vw;
    justify-content: center;
    .btn {
      flex: 1;
    }
  }
`;

export default Menu;
