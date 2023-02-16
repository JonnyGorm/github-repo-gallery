//Profile information 
const overview = document.querySelector(".overview");
const uList = document.querySelector(".repo-list");
//Github username
const username = ("JonnyGorm");

const gitProfile = async function () {
    const infoRequest = await fetch (`https://api.github.com/users/${username}`);
    const data = await infoRequest.json();
    //console.log(data);
    userInfo(data);
};

gitProfile();


const userInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
        <figure>
            <img alt="user avatar" src=${data.avatar_url}/>
        </figure>
        <div>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Bio:</strong> ${data.bio}</p>
            <p><strong>Location: ${data.location}</p>
            <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
        </div>`;
        overview.append(div);
        gitRepos();
};

const gitRepos = async function () {
    const repoRequest = await fetch (`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
    const repoData = await repoRequest.json();
    //console.log(repoData);
    displayRepo(repoData);
};
//gitRepos();

const displayRepo = function(repos) {
    for (const repo of repos) {
        const repoItem = document.createElement("li");
        repoItem.classList.add("repo");
        repoItem.innerHTML = `<h3>${repo.name}</h3>`;
        uList.append(repoItem);
    }
};