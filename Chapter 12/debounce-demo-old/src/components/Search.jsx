import { searchMeals } from "../api/mealApi";
import React, { useMemo, useState } from "react";
import { debounce } from "../helpers/debounce";

const Search = () => {
    const [query, setQuery] = useState("");
    const [meals, setMeals] = useState([]);

    const initSearchApiRequest = useMemo(() => {
        return debounce(async (q) => {
            setMeals(await searchMeals(q));
        }, 500);
    }, []);

    const onChangeQuery = e => {
        const q = e.target.value;
        setQuery(q);
        initSearchApiRequest(q);
    };

    return (
        <div>
            <form>
                <label style={{ fontWeight: 'bolder' }}>Search meals: </label>
                <input type="text" value={query} onChange={onChangeQuery} />
            </form>
            <ul>
                {meals?.map((meal) => {
                    return <li key={meal.idMeal}>{meal.strMeal}</li>;
                })}
            </ul>
        </div>
    );
};

export default Search;
