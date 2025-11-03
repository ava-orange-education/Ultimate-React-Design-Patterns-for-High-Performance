import api from "./api";

export const fetchTopQuotes = () => api.get("top_quotes").then(res => res.data.quotes);
export const postQuote = (quote) => api.post("", quote);
export const resetQuotes = () => api.post("reset", {});
export const fetchQuotesByPage = page => api.get("", { params: { page } }).then(res => res.data);
export const fetchQuotesByCursor = cursor => api.get("", { params: { cursor } }).then(res => res.data);