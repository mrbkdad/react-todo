import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.sm};
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
`
function Footer(){
    return <StyledFooter>TODO App - developed by JWP.</StyledFooter>;
}

export default Footer;