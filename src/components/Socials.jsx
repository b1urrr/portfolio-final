import {
  BsGithub,
  BsLinkedin,
  BsEnvelopeFill,
  BsFillFileEarmarkPdfFill,
} from "react-icons/bs";
import styled from "styled-components";

const Socials = () => {
  return (
    <Wrapper>
      <div className="icon">
        <a href="https://github.com/b1urrr" target="_blank" aria-label="github">
          <BsGithub />
        </a>
      </div>
      <div className="icon">
        <a href="https://www.linkedin.com/in/kristiangogov/" target="_blank" aria-label="linkedin">
          <BsLinkedin />
        </a>
      </div>
      <div className="icon">
        <a href="mailto:kristiangogow@gmail.com" target="_blank" aria-label="email">
          <BsEnvelopeFill />
        </a>
      </div>
      <div className="icon resume">
        <a
          href="https://drive.google.com/file/d/1Q_Nc-150x0NTB3d_BhFzelCer1fOZRAD/view?usp=drive_link"
          target="_blank"
          aria-label="resume"
        >
          <BsFillFileEarmarkPdfFill /> <span>Download CV</span>
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
  .resume {
    width: 135px;
    border-radius: 40px;
    transition-duration: 0s;
    position: relative;
  }
  .resume span {
    position: absolute;
    left: 28%;
    top: 10px;
    font-size: 14px;
    font-weight: 600;
    color: var(--textColor)
  }
  .resume:hover {
    transform: translateX(5px);
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
