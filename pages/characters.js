import CharacterList from "../components/characters/CharacterList.js";
import baseUrl from "../utils/baseUrl.js";
import view from "../utils/view.js";

const loadMoreButton = document.createElement("button");
loadMoreButton.innerText = "Load more";
loadMoreButton.classList.add("btn", "btn-sm", "btn-primary");

let currentPage = 1;
let query = "";

export default async function Characters(path) {
  let characters = await getCharacters(path);
  console.log(characters);
  CharacterList(characters);

  const searchBar = document.querySelector("#search");
  searchBar.addEventListener("change", async (event) => {
    // Reset the page number and fetch characters matching the search query
    currentPage = 1;
    query = event.target.value;
    characters = await getCharacters(path, query);
    CharacterList(characters);
  });

  async function loadMore() {
    try {
      currentPage++;
      characters = [...characters, ...(await getCharacters(path, query))];
      CharacterList(characters);
    } catch (error) {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "No more data";
      view.appendChild(errorMessage);
    }
  }

  view.insertAdjacentElement("afterend", loadMoreButton);
  loadMoreButton.addEventListener("click", loadMore);
}

async function getCharacters(path, query = "") {
  // path is not magically available here. It's available because Navigo router is passing it throught to every page
  const isHomeRoute = path === "/";
  if (isHomeRoute) {
    path = "/character";
  }

  const pagination = `?page=${currentPage}`;
  const searchQuery = query.length ? `&name=${query}` : "";

  const response = await fetch(`${baseUrl}${path}${pagination}${searchQuery}`);
  const characters = await response.json();
  console.log(baseUrl);

  return characters.results;
}
