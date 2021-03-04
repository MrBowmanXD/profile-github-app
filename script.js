// Get the Github username input form
// const gitHubForm = document.getElementById("gitHubForm");



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

    const containerDisplay = document.querySelector(".containerDisplay");

    // Create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Github endpoint, dinamically passing in specified username
    const url = `https://api.github.com/users/${username}/repos`;

    // Open a new connection, using a GET request via URL endpoint
    // Providing 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open("GET", url, true);

    // When request is received 
    // Process it here
    xhr.onload = function() {

        // Parse API data into JSON 
        const data = JSON.parse(this.response);

        // Loop over each object in data array
        for (let i in data) {

            const containerDisplay = document.querySelector(".containerDisplay");

            // Add html to container div
            let html = ` <div class="TopDisplay">
            <h1 class="usernameDisplay">${username}</h1>
            <p class="website">${data[i].url}</p>
        <br>
        <hr>
        <br>
    </div>
    <div class="repositories">
        <h2 class="h2Repositories">Repositories</h2>
            <p>${data[i].name}</p>
            <p>${data[i].html_url}</p>
            <p>${data[i].description}</p>
        <br>
        <hr>
        <br>
    </div>
    <div class="languages">
        <h2 class="h2Languages">Languages</h2>
        <p>${data[i].language}</p>
        <br>
        
    </div>`

            containerDisplay.innerHTML += html;
        }

    }

    // Send the request to the server
    xhr.send();

}

