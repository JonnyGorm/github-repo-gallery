//Profile information 
const overview = document.querySelector(".overview");
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
};