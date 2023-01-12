export function Repos(repos) {

    const profileLinks = document.querySelector(".main_info_repo");
    repos.slice(-10).forEach( repo => {
        const link = document.createElement("a");
      link.href = repo.html_url;
      link.innerHTML = repo.name;
      profileLinks.append(link);
     })
    
  }
 
