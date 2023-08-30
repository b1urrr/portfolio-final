import styled from "styled-components";
import {Socials} from './'

const Header = () => {
  return (
    <Wrapper>
      <div className="profile">
        <div className="about">
          <h1>Kristian Gogov</h1>
          <p>Front-end Developer</p>
          <div className="social">
            <Socials />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  .profile {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  .avatar {
  }

  .avatar:hover {
    scale: 1.2;
  }

  .avatar img {
    width: 175px;
    height: 175px;
    object-fit: cover;
    border-radius: 50%;
    filter: brightness(110%) contrast(110%) grayscale(100%);
  }
  .about {
    display: flex;
    flex-direction: column;
  }

  .about h1 {
    font-size: 55px;
    letter-spacing: -4px;
    text-transform: uppercase;
    font-weight: 900;
    color: var(--textColor);
    margin-bottom: 0;
  }
  .about p {
    color: var(--textColor);
  }
  .social {
    margin-top: 1rem;
  }
  .info {
    margin-top: 3rem;
  }

  @media screen and (max-width: 1100px) {
    margin: 3rem 0rem;
  }

  @media screen and (max-width: 960px) {
    align-items: center;
    .profile {
      margin: 0 2rem;
      align-items: center;
    }
    .about {
      align-items: center;
    }
    .info {
      margin: 3rem 2rem;
    }
  }

  @media screen and (max-width: 560px) {
    .about h1 {
      font-size: 40px;
      letter-spacing: -2px;
    }
  }
`;

export default Header;
