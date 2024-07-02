import "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";

let status = { isLoaded: false };

export let statusLoad = new Proxy(status, () => {});
let listPath = [];

async function includeHTML() {
  let includeElements = document.querySelectorAll("[data-include-html]");
  let fetchPromises = [];

  includeElements.forEach(function (element) {
    let filePath = element.getAttribute("data-include-html");
    listPath.push(filePath);
    let fetchPromise = fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        element.innerHTML = data;
        // chay script

        const scripts = element.querySelectorAll("script");
        scripts.forEach(async (item) => {
          const newScript = document.createElement("script");
          newScript.textContent = item.textContent;
          element.appendChild(newScript);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          element.removeChild(newScript);
        });
      });

    fetchPromises.push(fetchPromise);
  });
  await Promise.all(fetchPromises);
  console.log("Loaded files html!");
  handleSearchHeader();
}

includeHTML();

const handleSearchHeader = () => {
  if (listPath.find((item) => item.includes("header"))) {
    console.log("loading header");
    const input = document.querySelector(".Header__searchBar-input");
    const searchDropdown = document.querySelector(
      ".Header__searchBar-dropdown"
    );

    if (input && searchDropdown) {
      input.addEventListener("input", (e) => {
        if (e.target.value !== "") {
          searchDropdown.style.display = "block";
        } else {
          searchDropdown.style.display = "none";
        }
      });
    }
  }
};
