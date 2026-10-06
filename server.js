const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`School ERP Backend running at http://localhost:${PORT}`);
});