export default function LocationCard(location) {
  return `
    <div class="col">
    <div class="card shadow-sm">
      <div class="card-body">
      <h5 class="card-title">${location.name}</h5>
      <p class="card-text">
          Dimension: ${location.dimension}
        </p>
        <div
          class="d-flex justify-content-between align-items-center">
          <a href="#/location?id=${location.id}">
            <button
              type="button"
              class="btn btn-sm btn-primary">
              View
            </button>
           </a>
           <small class="text-muted">${location.type}</small>
        </div>
      </div>
    </div>
  </div>
    `;
}
