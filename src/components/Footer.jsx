import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <p>© {new Date().getFullYear()} Kristian Gogov</p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
margin: 3rem 0;
display: flex;
justify-content:flex-end;
p {
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;
}
@media screen and (max-width: 960px) {
    justify-content: center;
}
`

export default Footer
