import api from "./api";

const URLS = {
    getMeal: "search.php",
};

export const searchMeals = async (query, config) => {
    const res = await api
        .get(URLS.getMeal, {
            baseURL: "https://www.themealdb.com/api/json/v1/1/",
            params: { s: query },
            ...config,
        });
    return res.data.meals;
};
