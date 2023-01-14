import { Button } from "../ui/Button.js";
import { Image } from "../ui/Image.js";
import { Heading } from "../ui/Heading.js";
import DeadOrAlive from "./DeadOrAlive.js";

export default function CharacterCard(character) {
  return `
    <div class="col">
    <div class="card shadow-sm">
    ${Image(character.image)}
      <div class="card-body">
      ${Heading(character.name, "h5")}
      <p class="card-text">
          🌍 Location: ${character.location.name}
        </p>
        <div
          class="d-flex justify-content-between align-items-center">
          <a href="#/character?id=${character.id}">
            ${Button("View")}
           </a>
            ${DeadOrAlive(character.status)}
        </div>
      </div>
    </div>
  </div>
    `;
}
