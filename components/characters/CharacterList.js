import view from "../../utils/view.js";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList(characters) {
  const hasCharacters = characters.length > 0;

  return (view.innerHTML = `<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">${
    hasCharacters
      ? characters.map((character) => CharacterCard(character)).join("")
      : "No characters"
  }</div>`);
}
