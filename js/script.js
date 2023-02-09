//Profile information 
const overview = document.querySelector(".overview");
//Github username
const username = ("JonnyGorm");

const gitProfile = async function () {
    const infoRequest = await fetch (`https://api/github.com/users${username}`);
    const data = await infoRequest.json();
    
};
console.log(gitProfile);

// const userInfo = function (data) {
//     const div = document.createElement("div");
//     div.classList.add("user-info");
//     div.innerHTML = `
//     <figure>
//         <img alt="user avatar" src=${} />
//     </figure>
//     <div>
//         <p><strong>Name:</strong> ${}</p>
//         <p><strong>Bio:</strong> ${}</p>
//         <p><strong>Location:</strong> ${}</p>
//         <p><strong>Number of public repos:</strong> ${}</p>
//     </div> `
// };