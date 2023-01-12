async function fetchData(name) {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const user = await response.json();
    const responseRepos = await fetch(
      `https://api.github.com/users/${name}/repos`
    );
    const repos = await responseRepos.json();
    showProfile(user, repos);
  }
  const profileLinks = document.querySelector(".main_link");
  const profileImage = document.querySelector(".profileImage");
  const profileName = document.querySelector(".profileName");
  const profileDescription = document.querySelector(".description");
  const profileFollowers = document.querySelector("#numberFollower");
  const profileFollowing = document.querySelector("#numberFollowing");
  const profileRepos = document.querySelector("#numberRepos");
  const profileReset = document.querySelector('.reset')
  
  const showProfile = async (user, repos) => {
    repos.slice(-10).forEach( repo => {
        const link = document.createElement("a");
      link.href = repo.html_url;
      link.innerHTML = repo.name;
      profileLinks.append(link);
    })
    profileImage.src = user.avatar_url;
    profileName.innerHTML = user.name;
    if (user.bio === null) {
      profileDescription.innerHTML="Description not provided"
    }
    else{
      profileDescription.innerHTML = user.bio;
    }
    profileFollowers.innerHTML = user.followers;
    profileFollowing.innerHTML = user.following;
    profileRepos.innerHTML = user.public_repos;
  };
    function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    } 
  } 
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("change", (event) => {
    event.preventDefault();
    removeAllChildNodes(profileLinks);
    fetchData(event.target.value);
  });
  const form = document.querySelector("#form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      removeAllChildNodes(profileLinks);
      fetchData(event.target.value);
    }
    searchInput.blur();
  });


  
  

