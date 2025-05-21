import { atom } from 'recoil'

export const isDarkAtom = atom<boolean>({
  key: 'isDark',
  default: false,
})

export enum Category{
  "TO-DO" = "TO-DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
  "USER" = "USER"
}

export interface ITodo{
  id:number;
  text:string;
  category:Category;
  user_category?: string;
}

const loadTodos = (): ITodo[] => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    try {
      return JSON.parse(savedTodos);
    } catch (e) {
      console.error("Failed to parse todos from localStorage:", e);
      return [];
    }
  }
  return [];
};

export const TodoAtom = atom<ITodo[]>({
  key: "todo",
  default: loadTodos()
})

export interface ICategory{
  id:number;
  name: string;
  desc: string;

}

const loadCategories = (): ICategory[] => {
  const savedCategories = localStorage.getItem("category");
  if (savedCategories) {
    try {
      return JSON.parse(savedCategories);
    } catch (e) {
      console.error("Failed to parse category from localStorage:", e);
      return [];
    }
  }
  return [];
};

export const CategoryAtom = atom<ICategory[]>({
  key:"category",
  default: loadCategories()
})