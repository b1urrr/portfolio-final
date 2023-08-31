import { useGlobalContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styled from "styled-components";
const DarkTheme = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <Wrapper>
      <button className="dark-toggle" aria-label="theme" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
  .dark-toggle {
    background: transparent;
    border-color: transparent;
    width: 5rem;
    height: 2rem;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .toggle-icon {
    font-size: 2rem;
    color: var(--textColor);
  }
  @media screen and (max-width: 960px) {
    margin-top: 1rem;
  }
`;

export default DarkTheme;
