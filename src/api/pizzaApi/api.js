import { CURRENT_SERVER } from '../domain';
const axios = require('axios');

export default {
    getPizzasList() {
        const instCred = axios.create({
            baseURL: CURRENT_SERVER,
        });
        return instCred.get('db.json');
    },
};
