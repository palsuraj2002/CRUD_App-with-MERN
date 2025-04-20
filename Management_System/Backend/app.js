const express = require("express");
const connectDB = require("./db.js");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const PORT = 3006;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/product", productRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
