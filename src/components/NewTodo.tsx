import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { TodoAtom, type ITodo, Category } from "../atoms";
import { FormContainer } from "./StyledComponent";

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-size: 20px;
//   font-weight: bold;
//   form{
//     display: flex;
//     gap: 4px;
//     height: 40px;
//     color: ${props => props.theme.colors.text};
//   }
//   input{
//     flex-wrap: 1;
//     padding-left: 4px;
//     border: 2px solid ${props => props.theme.colors.border};
//   }
//   button{
//     flex-wrap: 1;
//     border: 2px solid ${props => props.theme.colors.border};
//     color:  ${props => props.theme.colors.text};
//     border-radius: 4px;
//     padding: 0px 12px;
//     box-shadow: ${props => props.theme.shadows.sm};
//   }
//   span{
//     font-size: 20px;
//     /* font-weight: normal; */
//     color: ${props => props.theme.colors.success};
//   }
// `;

interface IForm{
    todo:string
}

function NewTodo(){
    const setTodos = useSetRecoilState<ITodo[]>(TodoAtom);
    const { register, handleSubmit, 
        formState: { errors }, setValue } = useForm<IForm>();
  
    const onValid = (data: IForm) => {
        setValue("todo","")

        const newTodo: ITodo = {
            id: Date.now(),
            text: data.todo,
            category: Category["TO-DO"]
        };
        
        setTodos(prev => {
            const newTodos = [...prev, newTodo];
            localStorage.setItem("todos", JSON.stringify(newTodos));
            return newTodos;
        });
    };

    return <FormContainer>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("todo", { 
            required: "Please input Todo!",
            minLength: {
              value: 5, message: "Your Todo is too short!"
            }
          })}
          placeholder="Write your Todo"
        />
        <button type="submit">Add</button>
      </form>
      {errors.todo && <span>{errors.todo.message}</span>}
    </FormContainer>;
}

export default NewTodo;