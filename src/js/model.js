<<<<<<< HEAD
=======
import { clear } from "./helper.js";

>>>>>>> 52f022274886cfe6645e31175d7d54253d4c3725
// username =  document.querySelector(".username").value;

export function requestUserRepos(username) {

<<<<<<< HEAD
=======
  if (!username) return;

  clear();

>>>>>>> 52f022274886cfe6645e31175d7d54253d4c3725
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

  const data1 = JSON.parse(this.response);



  let html1 = `<br>
              <div class="TopDisplay">
              <h1 class="usernameDisplay"> ${data1.name}</h1>
              <p class="website"><b>website:</b></p><a href="${data1.blog}"> ${data1.blog}</a>
              <p><b>bio:</b> ${data1.bio}</p>
              <p><b>Location:</b> ${data1.location}</p>
              <p><b>Public Repositories:</b> ${data1.public_repos}</p>
              <br>
              <hr>
              <br>
              <div class="containerLanguages">
              </div>
          </div>`;

          containerDisplay.innerHTML += html1;

      }

      request.send();

      // When request is received
      // Process it here
      xhr.onload = function() {

          // Parse API data into JSON
          const data2 = JSON.parse(this.response);

          // Loop over each object in data array
          for (let i in data2) {

              const containerDisplay = document.querySelector(".containerDisplay");


              // Create a new XMLHttpRequest
              const requestLanguage = new XMLHttpRequest();

              // Github endpoint, dinamically passing in specified username
              const URLLanguages = data2[i].languages_url;

              // Open a new connection, using a GET request via URL endpoint
              // Providing 3 arguments (GET/POST, The URL, Async True/False)
              requestLanguage.open("GET", URLLanguages, true);

              // Add html to container div
              let html2 = `

      <div class="repositories">

          <h2 class="h2Repositories">Repository</h2>

              <p><b>name:</b></p><p> ${data2[i].name}</p>
              <p><b>url:</b></p><a href="${data2[i].html_url}"> ${data2[i].html_url}</a>
              <p><b>description:</b></p><p> ${data2[i].description}</p>
          <br>
          <hr>
          <br>
          </div>
                  <div class="languages">
                      <h2 class="h2Languages">Repo-Language</h2>
                      <p>Language most used:${data2[i].language}</p>
                      <a href="${data2[i].languages_url}">${data2[i].languages_url}</a>
                      <br>
                      <hr>
                  </div>
                  <div class="emptyContainer">

                  </div>`;

              containerDisplay.innerHTML += html2;

               let repositoryName = data2[i].name;

               var lanArrayJavaScript = [];

               var lanArrayHTML = [];

               var lanArrayCSS = [];

               var lanArraySwift = [];

               var lanArrayC = [];

               var lanArrayRuby = [];

               var lanArrayMakefile = [];

               var lanArrayObjectiveC = [];

              requestLanguage.onload = async function () {

                const containerEmpty = document.querySelector(".emptyContainer");

                // const containerDisplay = document.querySelector(".containerDisplay");

                // Parse API data into JSON
                const data3 = JSON.parse(this.response);

                if (data3.JavaScript !== undefined || isNaN(data3.JavaScript) !== true) {
                  lanArrayJavaScript.push(data3.JavaScript);
                }

                if (data3.HTML !== undefined || isNaN(data3.HTML) !== true) {
                  lanArrayHTML.push(data3.HTML);
                }

                if (data3.CSS !== undefined || isNaN(data3.CSS) !== true) {
                  lanArrayCSS.push(data3.CSS);
                }

                if (data3.Swift !== undefined || isNaN(data3.Swift) !== true) {
                  lanArraySwift.push(data3.Swift);
                }



                if (data3.C !== undefined || isNaN(data3.C) !== true) {
                  lanArrayC.push(data3.C);
                }

                if (data3.Ruby !== undefined || isNaN(data3.Ruby) !== true) {
                  lanArrayRuby.push(data3.Ruby);
                }

                if (data3.Makefile !== undefined || isNaN(data3.Makefile) !== true) {
                  lanArrayMakefile.push(data3.Makefile);
                }

                if (data3["Objective-C"] !== undefined || isNaN(data3["Objective-C"]) !== true) {
                  lanArrayObjectiveC.push(data3["Objective-C"]);
                }

                let html3 = `
                    <div class="languages">
                        <h2 class="h2Languages">${repositoryName}</h2>
                        <p>JavaScript:${data3.JavaScript}(${Math.round((data3.JavaScript/(data3.JavaScript + data3.HTML + data3.CSS))*100)}%)</p>
                        <p>HTML:${data3.HTML}(${Math.round((data3.HTML/(data3.JavaScript + data3.HTML + data3.CSS))*100)}%)</p>
                        <p>CSS:${data3.CSS}(${Math.round((data3.CSS/(data3.JavaScript + data3.HTML + data3.CSS))*100)}%)</p>
                        <p>Swift:${data3.Swift}</p>

                        <p>C: ${data3.C}</p>
                        <p>Ruby: ${data3.Ruby}</p>
                        <p>Makefile: ${data3.Makefile}</p>
                        <p>Objective-C: ${data3["Objective-C"]} </p>

                        <br>
                        <hr>
                    </div>`;

                    containerDisplay.innerHTML += html3;

                    var calculateJavaScript = 0;

                    var calculateHTML = 0;

                    var calculateCSS = 0;

                    var calculateSwift = 0;

                    var calculateC = 0;

                    var calculateRuby = 0;

                    var calculateMakefile = 0;

                    var calculateObjectiveC = 0;

                    var javaScriptLan = 0;

                    var htmlLan = 0;

                    var cssLan = 0;

                    var swiftLan = 0;

                    var cLan = 0;

                    var rubyLan = 0;

                    var makefileLan = 0;

                    var objectiveCLan = 0;

                    for (let i = 0; i < lanArrayJavaScript.length; i++) {
                      calculateJavaScript += lanArrayJavaScript[i];

                      calculateHTML += lanArrayHTML[i];

                      calculateCSS += lanArrayCSS[i];

                      calculateSwift += lanArraySwift[i];

                      calculateC += lanArrayC[i];

                      calculateRuby += lanArrayRuby[i];

                      calculateMakefile += lanArrayMakefile[i];

                      calculateObjectiveC += lanArrayObjectiveC[i];

                    }



                    javaScriptLan = (Math.round((calculateJavaScript / (calculateJavaScript + calculateHTML + calculateCSS + calculateSwift + calculateC + calculateRuby + calculateMakefile + calculateObjectiveC)) * 100)) + "%";

                    htmlLan = (Math.round((calculateHTML / (calculateJavaScript + calculateHTML + calculateCSS + calculateSwift + calculateC + calculateRuby + calculateMakefile + calculateObjectiveC)) * 100)) + "%";

                    cssLan = (Math.round((calculateCSS / (calculateJavaScript + calculateHTML + calculateCSS + calculateSwift + calculateC + calculateRuby + calculateMakefile + calculateObjectiveC)) * 100)) + "%";

                    swiftLan = (Math.round((calculateSwift / (calculateJavaScript + calculateHTML + calculateCSS + calculateSwift + calculateC + calculateRuby + calculateMakefile + calculateObjectiveC)) * 100)) + "%";

                    cLan = (Math.round((calculateC / (calculateJavaScript + calculateHTML + calculateCSS + calculateSwift + calculateC + calculateRuby + calculateMakefile + calculateObjectiveC)) * 100)) + "%";

                    rubyLan = (Math.round((calculateRuby / (calculateJavaScript + calculateHTML + calculateCSS + calculateSwift + calculateC + calculateRuby + calculateMakefile + calculateObjectiveC)) * 100)) + "%";

                    makefileLan = (Math.round((calculateMakefile / (calculateJavaScript + calculateHTML + calculateCSS + calculateSwift + calculateC + calculateRuby + calculateMakefile + calculateObjectiveC)) * 100)) + "%";

                    objectiveCLan = (Math.round((calculateObjectiveC / (calculateJavaScript + calculateHTML + calculateCSS + calculateSwift + calculateC + calculateRuby + calculateMakefile + calculateObjectiveC)) * 100)) + "%";

                    const containerLanguages = document.querySelector(".containerLanguages");


                    if (data3.JavaScript && data3.HTML && data3.CSS) {

                      let javaScriptLan2 = (Math.round((calculateJavaScript / (calculateJavaScript + calculateHTML + calculateCSS)) * 100)) + "%";

                      let htmlLan2 = (Math.round((calculateHTML / (calculateJavaScript + calculateHTML + calculateCSS)) * 100)) + "%";

                      let cssLan2 = (Math.round((calculateCSS / (calculateJavaScript + calculateHTML + calculateCSS)) * 100)) + "%";

                      let html5 = `
                        <div class="total-languages">
                          <h2 class="total-languages">Total Languages</h2>
                          <p class="javaScript"><b>JavaScript:</b> ${javaScriptLan2} </p>
                          <p class="html"><b>HTML:</b> ${htmlLan2} </p>
                          <p class="css"><b>CSS:</b> ${cssLan2} </p>

                          <br>
                          <hr>
                        </div>
                      `;

<<<<<<< HEAD
                      containerDisplay.innerHTML += html5;
=======
                      containerLanguages.innerHTML = html5;
>>>>>>> 52f022274886cfe6645e31175d7d54253d4c3725
                    }



                    if (data3.Swift) {

                      let html4 = `
                        <div class="total-languages">
                          <h2 class="total-languages">Total Languages</h2>
                          <p class="javaScript"><b>JavaScript:</b> ${javaScriptLan} </p>
                          <p class="html"><b>HTML:</b> ${htmlLan} </p>
                          <p class="css"><b>CSS:</b> ${cssLan} </p>
                          <p class="swift"><b>Swift:</b> ${swiftLan} </p>
                          <p class="c"><b>C:</b> ${cLan} </p>
                          <p class="ruby"><b>Ruby:</b> ${rubyLan} </p>
                          <p class="makefile"><b>Makefile:</b> ${makefileLan} </p>
                          <p class="objective-C"><b>Objective-C:</b> ${objectiveCLan} </p>

                          <br>
                          <hr>
                        </div>
                      `;

<<<<<<< HEAD
                      containerDisplay.innerHTML += html4;
=======
                      containerLanguages.innerHTML = html4;
>>>>>>> 52f022274886cfe6645e31175d7d54253d4c3725

                    }



              }

              requestLanguage.send();
          }

      }

      // Send the request to the server
      xhr.send();


}
