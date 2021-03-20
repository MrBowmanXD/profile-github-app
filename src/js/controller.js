import { containerDisplay, generate, usernameInput, gitHubUsername } from "./config.js";
import { requestUserRepos } from "./model.js";



// Listen to click event to generate html
generate.addEventListener("click", function showData (e) {

    // Prevent default button submission action
    e.preventDefault();

    // Run GitHub API function, passing in the GitHub username
    requestUserRepos(gitHubUsername);
});
