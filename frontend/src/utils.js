import axios from "axios";

let baseURL = import.meta.env.VITE_REACT_APP_API_URL ?? "http://localhost:8000";
baseURL += "/api";

const client = axios.create({
    baseURL,
});

export default client;