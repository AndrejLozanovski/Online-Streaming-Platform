const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/thumbnails", express.static(path.join(__dirname, "thumbnails")));

const moviesRoutes = require("./routes/movies");
const podcastsRoutes = require("./routes/podcasts");
const kidsRoutes = require("./routes/kids");
const actorsRoutes = require("./routes/actors");

app.use("/api/movies", moviesRoutes);
app.use("/api/podcasts", podcastsRoutes);
app.use("/api/kids", kidsRoutes);
app.use("/api/actors", actorsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
