/*
Package Name: GitHub Profile v1.4.0
Package URI: https://quentinboitel.netlify.app/
Description: The GitHub Profile Package for my website
Author: Quentin Boitel
Version: 1.4.0
*/

const APIURL = "https://api.github.com/users/";

const main = document.getElementById("github-profile");

getUser("qbtl");

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);

    getRepos(username);
}

async function getRepos(username) {
    const resp = await fetch(APIURL + username + "/repos");
    const respData = await resp.json();

    addReposToCard(respData);
}

function createUserCard(user) {
    const cardHTML = `
        <div class="github-card">
            <div>
                <a href="${user.html_url}"><img class="avatar" src="${user.avatar_url}" alt="${user.name}"/></a>
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repositories</strong></li>
                    <li class="twitter"><i class="fab fa-twitter"></i><a href="https://www.twitter.com/${user.twitter_username}"><strong>Twitter</strong></a></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById("repos");

    repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 10)
        .forEach((repo) => {
            const repoEl = document.createElement("a");
            repoEl.classList.add("repo");

            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        });
}