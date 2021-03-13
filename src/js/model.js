import { clear } from "./helper.js";

export function requestUserRepos(username) {

    if (!username) return;

    clear();

    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    const request = new XMLHttpRequest();

    // Github endpoint, dinamically passing in specified username
    const url = `https://api.github.com/users/${username}/repos`;

    const URL = `https://api.github.com/users/${username}`;

    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open("GET", url, true);

    request.open("GET", URL, true);

    request.onload = function() {

        const data = JSON.parse(this.response);

        let html1 = `<br>
        <div class="TopDisplay">
            <h1 class="usernameDisplay">${data.name}</h1>
            <p class="website"><b>website:</b></p><a href="${data.blog}"> ${data.blog}</a>
            <p><b>bio:</b>${data.bio}</p>
            <br>
            <hr>
            <br>
        </div>`;

        containerDisplay.innerHTML += html1;

    }

    request.send();

    // When request is received
    // Process it here
    xhr.onload = function() {

        // Parse API data into JSON
        const data = JSON.parse(this.response);

        // Loop over each object in data array
        for (let i in data) {

            const containerDisplay = document.querySelector(".containerDisplay");


            // Create a new XMLHttpRequest
            const requestLanguage = new XMLHttpRequest();

            // Github endpoint, dinamically passing in specified username
            const URLLanguages = data[i].languages_url;

            // Open a new connection, using a GET request via URL endpoint
            // Providing 3 arguments (GET/POST, The URL, Async True/False)
            requestLanguage.open("GET", URLLanguages, true);




            // Add html to container div
            let html2 = `

    <div class="repositories">

        <h2 class="h2Repositories">Repository</h2>

            <p><b>name:</b></p><p> ${data[i].name}</p>
            <p><b>url:</b></p><a href="${data[i].html_url}"> ${data[i].html_url}</a>
            <p><b>description:</b></p><p> ${data[i].description}</p>
        <br>
        <hr>
        <br>
        </div>
                <div class="languages">
                    <h2 class="h2Languages">Repo-Language</h2>
                    <p>Language most used:${data[i].language}</p>
                    <a href="${data[i].languages_url}">${data[i].languages_url}</a>
                    <br>
                    <hr>
                </div>
                <div class="emptyContainer">

                </div>`;

            containerDisplay.innerHTML += html2;

             let repositoryName = data[i].name;

            requestLanguage.onload = async function () {

              const containerEmpty = document.querySelector(".emptyContainer");

              // const containerDisplay = document.querySelector(".containerDisplay");

              // Parse API data into JSON
              const data = JSON.parse(this.response);

              console.log(data);

              let html3 = `
                  <div class="languages">
                      <h2 class="h2Languages">${repositoryName}</h2>
                      <p>JavaScript:${data.JavaScript}(${Math.round((data.JavaScript/(data.JavaScript + data.HTML + data.CSS))*100)}%)</p>
                      <p>HTML:${data.HTML}(${Math.round((data.HTML/(data.JavaScript + data.HTML + data.CSS))*100)}%)</p>
                      <p>CSS:${data.CSS}(${Math.round((data.CSS/(data.JavaScript + data.HTML + data.CSS))*100)}%)</p>
                      <br>
                      <hr>
                  </div>`;

                  containerEmpty.innerHTML += html3;
            }

            requestLanguage.send();
        }

    }

    // Send the request to the server
    xhr.send();

}
