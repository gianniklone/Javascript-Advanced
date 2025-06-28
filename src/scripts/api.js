import axios from "axios";

const API_URL = 'https://hacker-news.firebaseio.com/v0';

export async function fetchNewsIds() {
    try {
        const response = await axios.get(`${API_URL}/newstories.json`);
        return response.data;
    } catch (err) {
        console.error('Errore nel caricamento degli ID', err);
        return [];
    }
}

export async function fetchNewsDetails(id) {
    try {
        const response = await axios.get(`${API_URL}/item/${id}.json`);
        return response.data;
    } catch (err) {
        console.error(`Errore nel caricamento news id: ${id}`, err);
        return null;
    }
}
