import SingleCharacterComponent from "../components/characters/SingleCharacter.js";
import baseUrl from "../utils/baseUrl.js";
import view from "../utils/view.js";

export default async function SingleCharacter() {
  let character = null;
  let hasError = false;

  try {
    character = await getSingleCharacter();
  } catch (error) {
    hasError = true;
    console.error(error);
  }

  if (hasError) {
    view.innerHTML = `<div class="error">Error fetching story</div>`;
  }

  view.innerHTML = `
    <div>
      ${SingleCharacterComponent(character)}
    </div>
    `;
}

async function getSingleCharacter() {
  const characterId = window.location.hash.split("?id=")[1];
  const response = await fetch(`${baseUrl}/character/${characterId}`);
  const character = await response.json();
  console.log(characterId);

  return character;
}
