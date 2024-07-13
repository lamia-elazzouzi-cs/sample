var xhr = new XMLHttpRequest();
var url = './health_article.json';

// preparing the request with the right method, url and aync mode
xhr.open('GET', url, true);

// inform the XMLHttpRequest object that the expected response from the server is in JSON format
xhr.responseType = 'json';

// define what should happen when data is successfully loaded

xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function (article) {

        // dynamically creating <div>, <h2>, <p>, <h3>, <ul>, <li> elements for each article
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function (benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });


        // appending the title, description,ways_to_achieve, and benefits
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // attaching the article to parent container
        articlesDiv.appendChild(articleDiv);

    });

}

// sending the XMLHttpRequest to fetch the data from the given url
xhr.send();
