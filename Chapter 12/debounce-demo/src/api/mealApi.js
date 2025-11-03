import api from "./api";

export const searchMeals = async (query) => {
    try {
        const response = await api.get("search.php", {
            params: { s: query },
        });
        return response.data.meals || [];
    } catch (error) {
        console.error("Error fetching meals:", error);
        return [];
    }
};
