const carouselModel = require("../model/carouselModel");
const data = require("./../data");

// getting carousel  service
module.exports.getCarousel = (req, res, next) => {
  try {
    let slideCount = req.query.slides;

    if (slideCount != undefined) {
      if (isNaN(slideCount)) {
        res.status(200).json({
          status: "failure",
          message: "Incorrect slides count format!  ",
        });
      }
      let newData = data.slice(0, slideCount);
      res.status(200).json({
        status: "success",
        message: "success",
        data: newData,
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "success",
        data: data,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failure",
      message: "Some error occur",
    });
  }
};

module.exports.addCarousel = async (req, res, next) => {
  try {
    const carousel = new carouselModel({
      title: req.body.title,
      subTitle: req.body.subTitle,
      imgUrl: req.body.imgUrl,
    });

    const response = await carousel.create();
    console.log(response);
  } catch (error) {}
};
