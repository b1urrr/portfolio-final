import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import { wip } from "../data/icons";

const SingleProject = ({
  name,
  techstack,
  description,
  demo,
  github,
  image,
  work_in_progress,
}) => {
  return (
    <Wrapper>
      <div className="info-container">
        <div className="header">
          <h1>{name}</h1>
        </div>
        <div className="info">
          <div className="techstack">
            <div className="techstack-btn">
              <p>Tech Stack:</p>
            </div>
            {techstack.map((img, index) => {
              return <img key={index} src={img} alt="tech-stack-icon" />;
            })}
          </div>
          <p>{description}</p>
        </div>
        <div className="links">
          {demo ? (
            <a href={demo}>
              <button className="btn">
                Demo <FiExternalLink />
              </button>
            </a>
          ) : null}
          <a href={github} target="_blank">
            <button className="btn">
              Source <BsCodeSlash />
            </button>
          </a>
        </div>
      </div>
      <div className="image-container">
        {work_in_progress ? (
          <img className="wip" src={wip} alt="work in progress" />
        ) : null}
        <img className="project-img" src={image} alt="project image" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin: 1rem 0;
  background: var(--mediumColor);
  padding: 1rem;
  border-radius: 10px;
  .header h1 {
    color: var(--textColor);
    font-size: 30px;
    letter-spacing: var(--letter-spacing);
    font-weight: 400;
    text-transform: none;
    margin-bottom: 0;
  }
  .info img {
    box-shadow: var(--dark-shadow);
    border-radius: 50%;
    padding: 5px;
    width: 35px;
    margin: 5px;
    position: relative;
  }
  .info img:hover {
    scale: 1.4;
  }
  .techstack {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .techstack-btn {
    box-shadow: var(--dark-shadow);
    border-radius: 15px;
    padding: 5px 10px;
    margin-right: 5px;
    font-weight: 600;
  }
  .links {
    margin-top: 1rem;
    display: flex;
    gap: 5px;
  }
  .btn {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    position: relative;
    padding: 5px 12px;
    font-size: 15px;
    border: 2px solid var(--textColor);
    color: var(--textColor);
    border-radius: 34px;
    background-color: transparent;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
  }

  .btn::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: var(--textColor);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .btn:hover::before {
    scale: 3;
  }

  .btn:hover {
    color: var(--backgroundColor);
    scale: 1;
  }

  .btn:active {
    scale: 1;
  }

  .image-container {
    display: flex;
    gap: 5px;
    position: relative;
  }
  .image-container .wip {
    position: absolute;
    width: 75px;
    top: -35px;
    left: 40%;
    transform: rotate(45deg);
  }
  .image-container .project-img {
    width: 400px;
    align-self: center;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    align-items: center;
    max-width: 90vw;
    margin: 1rem auto;
    gap: 1rem;

    .header {
      display: flex;
      justify-content: center;
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .image-container .project-img {
      width: 90vw;
    }
    .image-container .wip {
      left: 45%;
    }

    .links {
      justify-content: center;
    }
  }
  @media screen and (max-width: 550px) {
    .image-container .wip {
      left: 38%;
    }
  }
`;

export default SingleProject;
