import styled from "styled-components";
import { skills } from "../data/data";
const SingleSkill = ({ category }) => {
  return (
    <Wrapper>
        {skills
          .filter((skill) => skill.category === category)
          .map((skill, index) => {
            return (
            <div key={index} className="skill">
                <img src={skill.icon} />
                <p>{skill.name}</p>
              </div>
            );
          })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  .skill {
    display: flex;
    gap: 20px;
    margin-bottom: 5px;
    align-items: center;
    background: var(--backgroundColor);
    padding: 10px 10px;
    border-radius: 5px;
    transition: var(--transition)
  }
  .skill p {
    font-size: 17px;
  }
  .skill img {
    width: 30px;
  }
`;

export default SingleSkill;
