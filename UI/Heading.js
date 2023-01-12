export const Heading = (value, level = "h1") => {
    switch (level) {
      case "h1":
        return `<h1 id="profileName">${value}</h1>`;
      case "h2":
        return `<h2 id="profileName">${value}</h2>`;
      case "h3":
        return `<h3 id="profileName">${value}</h3>`;
      case "h4":
        return `<h4 id="profileName">${value}</h4>`;
      case "h5":
        return `<h5 id="profileName">${value}</h5>`;
      case "h6":
        return `<h6 id="profileName">${value}</h6>`;
      default:
        return;
    }
  };
  