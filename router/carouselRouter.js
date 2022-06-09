const express = require("express");
const router = express.Router();

const carouselService = require("./../service/carouselService");

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/api/carousel", carouselService.getCarousel);
module.exports = router;
