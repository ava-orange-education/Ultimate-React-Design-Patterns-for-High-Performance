import { nanoid } from "nanoid";
import styled from "styled-components";
import IngredientsList from "./IngredientsList";
import AddIngredient from "./AddIngredient";
import { useCallback, useMemo, useState } from "react";

const StyledContainer = styled.div`margin-top: 2rem; max-width: 20rem; margin-left: auto; margin-right: auto;
    > div { display: flex; flex-direction: column; justify-content: space-between; }
    > div > h2 {}
`;
const StyledHeading2 = styled.h2`margin-bottom: 1rem; font-weight: 600;`;
const StyledSpaceY4 = styled.div`margin-top: 1rem;
  > * + * {margin-top: 1rem;}
`;
const initialIngredients = [
    { id: nanoid(), name: "500g Fish" },
    { id: nanoid(), name: "500 ml milk" },
    { id: nanoid(), name: "10 tbsp sugar" },
];

const Ingredients = ({ ingredientsInfo }) => {
    console.log("Ingredient rendered");
    const [ingredients, setIngredients] = useState(initialIngredients);

    const addIngredient = (ingredient) => {
        setIngredients(ingredients => [
            ...ingredients,
            { name: ingredient, id: nanoid() },
        ]);
    };

    const deleteIngredient = useCallback(id => {
        setIngredients((ingredients) => ingredients.filter((ing) => ing.id !== id));
    }, []);

    const HeaderText = useMemo(() => {
        console.log("HeaderText called")
        return <StyledHeading2>Ingredients ({ingredients.length})</StyledHeading2>;
    }, [ingredients.length]);

    return (
        <StyledContainer>
            <div>
                {HeaderText}
                {ingredientsInfo}
            </div>
            <StyledSpaceY4>
                <IngredientsList ingredients={ingredients} deleteIngredient={deleteIngredient} />
                <AddIngredient addIngredient={addIngredient} />
            </StyledSpaceY4>
        </StyledContainer>
    )
}
export default Ingredients