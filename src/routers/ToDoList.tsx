import { TodoAtom, type ITodo, Category } from "../atoms";
import { useRecoilValue } from "recoil";
import NewTodo from "../components/NewTodo";
import ToDo from "../components/ToDo";
import styled from "styled-components";
import React, { useState } from "react";
import { ListContainer, ListItemContainer, NewContainer } from "../components/StyledComponent";

const TabContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.colors.text};
`;

interface ITabSeleted {
  isSelected: boolean;
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Tab = styled.button<ITabSeleted>`
  padding: 8px 16px;
  border: none;
  background: ${props => props.isSelected ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.theme.colors.text};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

function ToDoList() {
  const todos = useRecoilValue<ITodo[]>(TodoAtom);
  // const [category, setCategory] = useRecoilState(CategoryAtom);
  const [activeTab, setActiveTab] = useState<Category | 'All'>('All');

  const filteredTodos = todos.filter(todo => {
    if (activeTab === 'All') return true;
    return todo.category === activeTab;
  });

  const handleActive = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget : { name }
    } = event;
    setActiveTab(name as any);
  }

  return (
    <>
      <NewContainer>
        <NewTodo />
      </NewContainer>
      <ListContainer>
        <TabContainer>
          <Tab name="All"
            isSelected={activeTab === "All"} 
            onClick={handleActive}
          >
            All
          </Tab>
          <Tab name={Category["TO-DO"]}
            isSelected={activeTab === Category["TO-DO"]} 
            onClick={handleActive}
          >
            To Do
          </Tab>
          <Tab name={Category.DOING}
            isSelected={activeTab === Category.DOING} 
            onClick={handleActive}
          >
            Doing
          </Tab>
          <Tab name={Category.DONE}
            isSelected={activeTab === Category.DONE} 
            onClick={handleActive}
          >
            Done
          </Tab>
        </TabContainer>
        <ListItemContainer>
          {filteredTodos.map(todo => <ToDo key={todo.id} {...todo}/>)}
        </ListItemContainer>
      </ListContainer>
    </>
  );
}

export default ToDoList;