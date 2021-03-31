<<<<<<< HEAD
import { containerDisplay, generate, usernameInput, gitHubUsername, clear } from "./config.js";
=======
import { containerDisplay, generate, usernameInput, gitHubUsername } from "./config.js";
>>>>>>> 52f022274886cfe6645e31175d7d54253d4c3725
import { requestUserRepos } from "./model.js";



// Listen to click event to generate html
generate.addEventListener("click", function showData (e) {

    // Prevent default button submission action
    e.preventDefault();

    // Run GitHub API function, passing in the GitHub username
    requestUserRepos(gitHubUsername);
});
<<<<<<< HEAD

clear.addEventListener("click", function clearStuff (e) {

  e.preventDefault();

  containerDisplay.innerHTML = "";

  gitHubUsername = "";
})
=======
>>>>>>> 52f022274886cfe6645e31175d7d54253d4c3725
