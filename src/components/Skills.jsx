import styled from "styled-components";
import { skills } from "../data/data";
import { SingleSkill } from "./";
const Skills = () => {
  const uniqueCategories = [...new Set(skills.map((skill) => skill.category))];
  return (
    <Wrapper>
      {uniqueCategories.map((category, index) => {
        return (
          <div key={index} className="column">
            <h3>{category}</h3>
            <div className="line"></div>
            <SingleSkill category={category} />
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 1rem;
  .column {
    display: flex;
    flex-direction: column;
    background: var(--mediumColor);
    flex: 1 1 0;
    border-radius: 10px;
    padding: 1rem;
  }
  .column h3 {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: var(--textColor)
  }
  .line {
    width: 100%;
    height: 2px;
    background: var(--textColor);
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    margin: 1rem auto 0;
    max-width: 90vw;
  }
`;

export default Skills;
