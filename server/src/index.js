const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { StatusCodes } = require("http-status-codes");

const app = express();

const PORT = 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(StatusCodes.OK).send("We are on home");
});

app.get("/services", (req, res) => {
  res.status(StatusCodes.OK).send([
    {
      service: "House Constuction",
      category: "Construction",
      region: "Centro",
      city: "Campinas",
      state: "São Paulo",
    },
    {
      service: "Car Repair",
      category: "Mechanical",
      region: "Taquaral",
      city: "Campinas",
      state: "São Paulo",
    },
    {
      service: "Phone Repair",
      category: "Information Technology",
      region: "Parque Universitário de Viracopos",
      city: "Campinas",
      state: "São Paulo",
    },
  ]);
});

app.post("/services/:id", (req, res) => {
  const { id } = req.params;
  const { service, category, city } = req.body;

  if (!service || !category || !city) {
    res
      .status(StatusCodes.IM_A_TEAPOT)
      .send({ message: "We need all the information!" });
  }

  res.send({
    service,
    category,
    city,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
