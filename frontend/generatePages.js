// generatePages.js
const fs = require("fs");
const path = require("path");

const pagesDirectory = path.join(__dirname, "src", "pages");

function generatePageList() {
  const files = fs.readdirSync(pagesDirectory);
  const pageComponents = files.map((file) => {
    const name = path.parse(file).name;
    return {
      path: `/${name}`,
      component: name,
      file: `./pages/${file}`,
    };
  });

  const output = `
    export const pages = ${JSON.stringify(pageComponents, null, 2)};
  `;

  fs.writeFileSync(path.join(__dirname, "src", "pages.js"), output);
}

generatePageList();
