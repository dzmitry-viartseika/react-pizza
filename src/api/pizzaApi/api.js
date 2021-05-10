import { CURRENT_SERVER } from '../domain';
const axios = require('axios');

export default {
    getPizzasList(sortBy, category) {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get(`/pizzas?${category !== null ? `category=${category}` : '' }&_sort=${sortBy}&_order=desc`);
    },
};
