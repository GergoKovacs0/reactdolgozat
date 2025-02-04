import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://faiskola.richardkorom.hu/api",
})

export default apiClient;