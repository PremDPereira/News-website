document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "c42a0b70ce3b9d24c5ecb8dce2d10fc4"; // Replace with your API Key
    const url = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&country=in`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let newsContainer = document.getElementById("news-container");
            newsContainer.innerHTML = "";

            data.articles.forEach(news => {
                let newsCard = document.createElement("div");
                newsCard.classList.add("news-card");

                newsCard.innerHTML = `
                    <img src="${news.image || 'images/default-news.jpg'}" alt="News Image">
                    <h3>${news.title}</h3>
                    <p>${news.description || "Click below to read more."}</p>
                    <a href="${news.url}" target="_blank">Read More</a>
                `;

                newsContainer.appendChild(newsCard);
            });
        })
        .catch(error => console.log("Error loading news:", error));
});
