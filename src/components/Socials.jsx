import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import styled from "styled-components";

const Socials = () => {
  return (
    <Wrapper>
      <div className="icon">
        <a href="https://github.com/b1urrr" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div className="icon">
        <a href="https://www.linkedin.com/in/kristiangogov/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div className="icon">
        <a href="mailto:kristiangogow@gmail.com" target="_blank">
          <BsEnvelopeFill />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 15px;

  .icon {
    display: flex;
    background: var(--backgroundColor);
    box-shadow: var(--dark-shadow);
    border-radius: 50%;
    padding: 0.5rem;
  }
  .icon:hover {
    scale: 1.2;
  }
  .icon a {
    display: flex;
  }

  svg {
    font-size: 1.5rem;
    color: var(--textColor);
    cursor: pointer;
  }
`;

export default Socials;
