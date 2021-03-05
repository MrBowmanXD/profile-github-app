const generate = document.querySelector(".generate");

// Listen to click event to generate html
generate.addEventListener("click", function showData (e) {

    // Prevent default button submission action
    e.preventDefault();

    // Get the GitHub username input filed on the DOM
    let usernameInput = document.querySelector(".username");

    // Get the value of the GitHub username input field 
    let gitHubUsername = usernameInput.value;

    // Run GitHub API function, passing in the GitHub username 
    requestUserRepos(gitHubUsername); 
})


function requestUserRepos(username) {

    if (!username) return;

    clear();

    const containerDisplay = document.querySelector(".containerDisplay");

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

        

        let html = `<br>
        <div class="TopDisplay">
            <h1 class="usernameDisplay">${data.name}</h1>
            <p class="website"><b>website:</b></p><a href="https://github.com/${username}"> https://github.com/${username}</a>
            <br>
            <hr>
            <br>
        </div>`;

        containerDisplay.innerHTML += html;

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

            console.log(data[i].languages_url);

            // Add html to container div
            let html = `
            
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
        <p>${data[i].language}</p>
        <br>
        <hr>
    </div>`

            containerDisplay.innerHTML += html;
        }

    }

    // Send the request to the server
    xhr.send();

}

function clear () {
    containerDisplay.innerHTML = "";
}