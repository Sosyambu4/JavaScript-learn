const SingleLocation = (location) => {
  return `
    <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">${location.name}</h1>
        <p class="lead">Dimension: ${location.dimension}</p>
        <p class="lead">Number of residents: ${location.residents.length}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          ${location.type}
        </div>
      </div>
    </div>
  </div> 
    `;
};

export default SingleLocation;
