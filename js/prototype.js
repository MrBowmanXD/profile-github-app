const popUp = document.querySelector(".generate");
const inputBox = document.querySelector(".username");
const overlay = document.querySelector(".overlay");
const container = document.querySelector(".container");
const generate__input = document.querySelector(".generate__input");
const containerDisplay = document.querySelector(".containerDisplay");
const clear = document.querySelector(".clear");
const TopDisplay = document.querySelector(".TopDisplay");
const usernameInput = document.querySelector(".username");

// let gitHubUsername = usernameInput.value;

function userDataGithub(username) {
  if (!username) return;

  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      const data = json;

      let html = `<br>
              <div class="TopDisplay">
              <img class="img" src="${data.avatar_url}" alt="Avatar of the user">
              <h1 class="usernameDisplay"> ${data.name}</h1>
              <p class="website"><b>website:</b></p><a href="${data.blog}"> ${data.blog}</a>
              <p><b>bio:</b> ${data.bio}</p>
              <p><b>Location:</b> ${data.location}</p>
              <p><b>Public Repositories:</b> ${data.public_repos}</p>
          </div>`;

      containerDisplay.innerHTML += html;
    })
    .catch(function(err) {
      console.log("Fetch problem: " + err.message);
    });
}

generate__input.addEventListener("click", function popUpInput(e) {
  e.preventDefault();

  inputBox.classList.remove("hidden");

  // popUp.style.display = "none";

  generate__input.classList.add("hidden");

  popUp.classList.remove("hidden");

  overlay.classList.remove("hidden");
});

popUp.addEventListener("click", function dataShowPlease(e) {
  e.preventDefault();

  overlay.classList.add("hidden");

  generate__input.classList.add("hidden");

  inputBox.classList.add("hidden");

  popUp.classList.add("hidden");

  clear.classList.remove("hidden");

  let gitHubUsername = usernameInput.value;

  userDataGithub(gitHubUsername);
});

clear.addEventListener("click", function clearPost(e) {
  e.preventDefault();

  usernameInput.value = "";

  generate__input.classList.remove("hidden");

  containerDisplay.innerHTML = "";

  clear.classList.add("hidden");
});
