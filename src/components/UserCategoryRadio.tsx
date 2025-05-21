import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CategoryAtom, TodoAtom, type ICategory, type ITodo } from '../atoms';
import { ItemButton } from './StyledComponent';

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: ${props => props.theme.colors.background};
  min-width: 80px;
  box-shadow: ${props => props.theme.shadows.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  z-index: 1;
`;

const DropdownItem = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 12px;
  color: ${props => props.theme.colors.text};
  &:hover {
    background-color: #f8f9fa;
  }
`;

const Radio = styled.input`
  margin-right: 8px;
`;

interface IUserCategory {
  todoId: number;
}

function UserCategoryRadio({todoId}:IUserCategory) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const categories = useRecoilValue<ICategory[]>(CategoryAtom);
  const setTodos = useSetRecoilState<ITodo[]>(TodoAtom);

  const handleRadioChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
    setIsOpen(false);
    setTodos(prev => {
      const selectedTodoIndex = prev.findIndex(todo => todo.id === todoId);
      const selectedCategoryIndex = categories.findIndex(category => category.id === categoryId);
      const newTodo = {
        ...prev[selectedTodoIndex],
        user_category: categories[selectedCategoryIndex].name
      }
      const newTodos = [...prev.slice(0,selectedTodoIndex),newTodo,...prev.slice(selectedTodoIndex+1)];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <Container>
      <ItemButton onClick={() => setIsOpen(!isOpen)}>
        User Category
      </ItemButton>
      <DropdownMenu isOpen={isOpen}>
        {categories.map(item => (
          <DropdownItem key={item.id}>
            <Radio
              type="radio"
              name="category"
              checked={selectedCategory === item.id}
              onChange={() => handleRadioChange(item.id)}
            />
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Container>
  );
}

export default UserCategoryRadio;
