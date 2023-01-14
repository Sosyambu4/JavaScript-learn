export const Heading = (value, level = "h1") => {
  switch (level) {
    case "h1":
      return `<h1 class="card-title">${value}</h1>`;
    case "h2":
      return `<h2 class="card-title">${value}</h2>`;
    case "h3":
      return `<h3 class="card-title">${value}</h3>`;
    case "h4":
      return `<h4 class="card-title">${value}</h4>`;
    case "h5":
      return `<h5 class="card-title">${value}</h5>`;
    case "h6":
      return `<h6 class="card-title">${value}</h6>`;
    default:
      return;
  }
};
