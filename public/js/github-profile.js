/*
Package Name: GitHub Profile v1.4.3
Package URI: https://quentinboitel.netlify.app/
Description: The GitHub Profile Package for my website
Author: Quentin Boitel
Version: 1.4.3
*/

const APIURL = "https://api.github.com/users/";

const main = document.getElementById("github-profile");

getUser("qbtl");

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);
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
                <br>
                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repositories</strong></li>
                </ul>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}
