import SingleLocationComponent from "../components/locations/SingleLocation.js";
import view from "../utils/view.js";
import baseUrl from "../utils/baseUrl.js";

export default async function SingleLocation() {
  let location = null;
  let hasError = false;

  try {
    location = await getSingleLocation();
  } catch (error) {
    hasError = true;
    console.error(error);
  }

  if (hasError) {
    view.innerHTML = `<div class="error">Error fetching story</div>`;
  }

  view.innerHTML = `
    <div>
      ${SingleLocationComponent(location)}
    </div>
    `;
}

async function getSingleLocation() {
  const locationId = window.location.hash.split("?id=")[1];
  const response = await fetch(`${baseUrl}/location/${locationId}`);
  const singleLocation = await response.json();
  return singleLocation;
}
