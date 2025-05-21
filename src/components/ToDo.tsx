import styled from "styled-components";
import { Category, TodoAtom, type ITodo } from "../atoms";
import { useRecoilState } from "recoil";
import React from "react";
import { BubbleText, ListItem } from "./StyledComponent";
import UserCategoryRadio from "./UserCategoryRadio";

const ItemButton = styled.button`
    border: 1px solid ${props => props.theme.colors.border};
    font-size: 12px;
    font-weight: normal;
    padding: 2px;
    color: ${props => props.theme.colors.text}
`;

const getEmoji = (category: Category) => {
    switch(category) {
        case Category["TO-DO"]:
            return "📋";
        case Category.DOING:
            return "⏳";
        case Category.DONE:
            return "✅";
        case Category.USER:
            return "👤";
        default:
            return "";
    }
};

function ToDo({id,text,category,user_category}:ITodo){
    const [todos, setTodos] = useRecoilState<ITodo[]>(TodoAtom);
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        const newTodo = {
            id: id,
            text: text,
            category: name as any,
            user_category: user_category
        }
        const targetIndex = todos.findIndex(ele => ele.id === id);
        setTodos((prev) => {
            const newTods = [...prev.slice(0,targetIndex),newTodo,...prev.slice(targetIndex+1)];
            localStorage.setItem("todos", JSON.stringify(newTods));
            return newTods
        });
        
    };

    return <ListItem key={id}>
        {text} {user_category ? <BubbleText>{user_category}</BubbleText> : ""} {getEmoji(category)}
        {category !== Category["TO-DO"] ? <ItemButton name={Category["TO-DO"]} onClick={handleClick}>{Category["TO-DO"]}</ItemButton> : ""}
        {category !== Category.DOING ? <ItemButton name={Category.DOING} onClick={handleClick}>{Category.DOING}</ItemButton> : ""}
        {category !== Category.DONE ? <ItemButton name={Category.DONE} onClick={handleClick}>{Category.DONE}</ItemButton> : ""}
        <UserCategoryRadio todoId={id} />
    </ListItem>;
}

export default ToDo;