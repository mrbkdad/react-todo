import { FormContainer, ItemButton, ListContainer, ListItem, ListItemContainer } from "../components/StyledComponent";
import { useRecoilState } from "recoil";
import { CategoryAtom, type ICategory } from "../atoms";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Title = styled.span`
    color: ${props => props.theme.colors.secondary};
    font-size: 20px;
    font-weight: bold;
`;

interface IForm{
    category_name:string,
    category_desc:string
}
function UserCategory(){
    const [categories, setCategorys] = useRecoilState<ICategory[]>(CategoryAtom);
    const { register, handleSubmit, 
        formState: { errors }, setValue } = useForm<IForm>();
  
    const onValid = (data: IForm) => {
        console.log(data);
        setValue("category_name","")
        setValue("category_desc","")

        setCategorys(prev => {
            const newItem: ICategory ={
                id: Date.now(),
                name: data.category_name,
                desc: data.category_desc
            };
            const newCategories = [...prev, newItem];
            localStorage.setItem("category", JSON.stringify(newCategories));
            return newCategories;
        })
    };

    return <>
        <Title>User Category Management</Title>
        <FormContainer>
            <form onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("category_name", { 
                        required: "Please input your 3 letters category!",
                        maxLength: {
                            value: 3, 
                            message: "Your category must be 3 letters!"
                        },
                        minLength: {
                            value: 3, 
                            message: "Your category must be 3 letters!"
                        }
                    })}
                    placeholder="3 letters category"
                />
                <input
                    {...register("category_desc", { 
                        required: "Please input your category description!"
                    })}
                    placeholder="category description"
                />
                <button type="submit">Add</button>
            </form>
            {errors.category_name && <span>{errors.category_name.message}</span>}
            {errors.category_desc && <span>{errors.category_desc.message}</span>}
        </FormContainer>
        <ListContainer>
            <ListItemContainer>
            {categories.map((item) => <ListItem key={item.id}>{item.name} : {item.desc} {"["} <ItemButton>del</ItemButton> {"]"}</ListItem>)}
            </ListItemContainer>
        </ListContainer>
    </>
    
}

export default UserCategory;