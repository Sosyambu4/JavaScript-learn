import UserProfileComponent from "../components/githubUser/UserProfile.js";
import baseUrl from "../utils/baseUrl.js";
import view from "../utils/view.js";


const profileLinks = document.querySelector(".main_info_repo");

export default async function SearchUser() {
  let user = null;
  let repos = null;
    user = await getUser();
    repos = await getRepos();
 
  view.innerHTML = `
      ${UserProfileComponent(user, repos)}
    `;
}

async function getUser(name ="Sosyambu4") {
    const response = await fetch(`${baseUrl}/${name}`);
    const user = await response.json();
   return user;
  }
  async function getRepos(name="Sosyambu4") {
    const responseRepos = await fetch(
      `${baseUrl}/${name}/repos`
    );
    const repos = await responseRepos.json();
    return repos;
  }


  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }