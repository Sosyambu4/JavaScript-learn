import LocationCard from "../components/locations/LocationCard.js";
import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js";

export default async function Locations(path) {
  const locations = await getLocations(path);

  const hasLocations = locations.length > 0;

  view.innerHTML = `<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    ${
      hasLocations
        ? locations.map((location) => LocationCard(location)).join("")
        : "No locations"
    }
  </div>`;
}

async function getLocations(path) {
  path = "/location";

  const response = await fetch(`${baseUrl}${path}`);
  const locations = await response.json();
  return locations.results;
}
