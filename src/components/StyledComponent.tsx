import styled from "styled-components";

export const NewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  form{
    display: flex;
    gap: 4px;
    height: 40px;
    color: ${props => props.theme.colors.text};
  }
  input{
    flex-wrap: 1;
    padding-left: 4px;
    border: 2px solid ${props => props.theme.colors.border};
  }
  button{
    flex-wrap: 1;
    border: 2px solid ${props => props.theme.colors.border};
    color:  ${props => props.theme.colors.text};
    border-radius: 4px;
    padding: 0px 12px;
    box-shadow: ${props => props.theme.shadows.sm};
  }
  span{
    font-size: 20px;
    /* font-weight: normal; */
    color: ${props => props.theme.colors.success};
  }
`;

export const ListContainer = styled.div`
  padding: 8px;
  width: 80%;
  min-height: 400px;
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.text};
  border-radius: 12px;
`;
export const ListItemContainer = styled.ul`
  margin-top: 12px;
  font-size: 20px;
  border-radius: 4px;
`;
export const ListItem = styled.li`
    padding: 4px 16px;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
`;
export const ItemButton = styled.button`
    border: 1px solid ${props => props.theme.colors.border};
    font-size: 12px;
    font-weight: normal;
    padding: 2px;
    color: ${props => props.theme.colors.text}
`;


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  form{
    display: flex;
    gap: 4px;
    height: 40px;
    color: ${props => props.theme.colors.text};
  }
  input{
    flex-wrap: 1;
    padding-left: 4px;
    border: 2px solid ${props => props.theme.colors.border};
  }
  button{
    flex-wrap: 1;
    border: 2px solid ${props => props.theme.colors.border};
    color:  ${props => props.theme.colors.text};
    border-radius: 4px;
    padding: 0px 12px;
    box-shadow: ${props => props.theme.shadows.sm};
  }
  span{
    font-size: 20px;
    /* font-weight: normal; */
    color: ${props => props.theme.colors.success};
  }
`;

export const BubbleText = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 20px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  margin-bottom: 8px;
  vertical-align: 0.7em;
  font-size: 0.6em;
`;