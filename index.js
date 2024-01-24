import express from "express";
import cors from "cors";
import { doctors } from "./doctors.js";
import { testimonials } from "./testimonials.js";
const app = express();
const port = 8000;

app.use(cors());

app.get("/doctors", (req, res) => {
  try {
    setTimeout(() => {
      res.json(doctors);
    }, 1000);
  } catch (err) {
    console.error("Error fetching doctors: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/testimonials", (req, res) => {
  try {
    setTimeout(() => {
      res.json(testimonials);
    }, 1000);
  } catch (err) {
    console.error("Error fetching testimonials: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
