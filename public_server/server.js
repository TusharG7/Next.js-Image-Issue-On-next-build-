const express = require("express");
const path = require("path");
const { createServer } = require("http");
const cors = require("cors");

const app = express();
const server = createServer(app);

const parentDirectoryPath = path.resolve(__dirname, "..");
const folderPath = path.join(parentDirectoryPath, "public");
app.use(express.static(folderPath));
app.use(cors());

const port = 4000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
