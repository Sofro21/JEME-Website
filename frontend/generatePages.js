// generatePages.js
const fs = require("fs");
const path = require("path");

const pagesDirectory = path.join(__dirname, "src", "Pages");

function generatePageList() {
  const files = fs.readdirSync(pagesDirectory);
  const pageComponents = files.map((file) => {
    const name = path.parse(file).name;
    return {
      path: `/${name}`,
      component: name,
      file: `./Pages/${file}`,
    };
  });

  const output = `
    export const Pages = ${JSON.stringify(pageComponents, null, 2)};
  `;

  fs.writeFileSync(path.join(__dirname, "src", "Pages.js"), output);
}

generatePageList();
