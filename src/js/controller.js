import { containerDisplay, generate, usernameInput, gitHubUsername, clear } from "./config.js";
import { requestUserRepos } from "./model.js";



// Listen to click event to generate html
generate.addEventListener("click", function showData (e) {

    // Prevent default button submission action
    e.preventDefault();

    // Run GitHub API function, passing in the GitHub username
    requestUserRepos(gitHubUsername);
});

clear.addEventListener("click", function clearStuff (e) {

  e.preventDefault();

  containerDisplay.innerHTML = "";

  gitHubUsername = "";
})
