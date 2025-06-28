import './styles/main.scss';
import { fetchNewsIds, fetchNewsDetails } from './scripts/api.js';
import { displayNews } from './scripts/dom.js';
import { formatDate } from './scripts/utils.js';



const NEWS_LIMIT = 10;
let allNewsIds = [];
let currentIndex = 0;

async function loadNews(startIndex = 0, count = 10) {
    const sliceIds = allNewsIds.slice(startIndex, startIndex + count);
    const newsPromise = sliceIds.map(id => fetchNewsDetails(id));
    const newsItems  = await Promise.all(newsPromise);

    newsItems
        .filter(item => item !== null)
        .forEach(item => displayNews(item));
}

document.addEventListener('DOMContentLoaded', async () => {
     allNewsIds = await fetchNewsIds();
    loadNews(currentIndex, NEWS_LIMIT);
});

document.getElementById('load-more').addEventListener('click', () => {
    currentIndex += NEWS_LIMIT;
    loadNews(currentIndex, NEWS_LIMIT);
});
