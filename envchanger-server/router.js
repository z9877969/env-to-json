const { Router } = require("express");
const path = require("path");

const router = Router();

const html = path.join(__dirname, "./index.html");

router.get("/", async (req, res, next) => {
  try {
    res.sendFile(html);
  } catch (error) {
    res.send(`<h2>Error - ${error.message}</h2>`);
  }
});
