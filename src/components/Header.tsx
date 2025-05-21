import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.background};
    padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
    box-shadow: ${props => props.theme.shadows.sm};
    width: 100%;
    #left{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-size: 1.5rem;
        font-weight: 600;
        color: ${props => props.theme.colors.primary};
      }
    #right {
      display: flex;
      align-items: center;
      font-size: 12px;
      gap: 4px;
      #usercategory{
        color: ${props => props.theme.colors.text};
        border: 2px solid ${props => props.theme.colors.border};
        padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
        border-radius: 4px;
      }
    }
`
const ToggleButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`
function Header(){
    const [isDark, setTheme] = useRecoilState(isDarkAtom)

    const toggleTheme = () => {
      setTheme(prev => !prev)
    }
    return <StyledHeader>
        <div id="left">
            <span>
              <Link to="/">Todo App</Link>
            </span>
            <div id="right">
              <Link to="/usercategory"><button id="usercategory">User Category</button></Link>
              <ToggleButton onClick={toggleTheme}>
              {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
              </ToggleButton>
            </div>
        </div>
  </StyledHeader>;
}

export default Header;