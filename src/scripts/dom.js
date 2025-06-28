import { formatDate } from './utils.js';

export function displayNews(newsItem) {
    const container = document.getElementById("news-container");

    const newsEl = document.createElement("div");
    newsEl.classList.add("news-item");

    newsEl.innerHTML = `
        <h2>${newsItem.title}</h2>
        <a href="${newsItem.url}" target="_blank">Check out this news article</a>
        <div class="date">${formatDate(newsItem.time)}</div>
    `;

    container.appendChild(newsEl);
}