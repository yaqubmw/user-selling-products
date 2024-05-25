import express from "express";

import connectDB from "@utils/db";
import authRoutes from "@api/routes/auth";
import productRoutes from "@api/routes/products";

const app = express();

app.use(express.json());

// connect to database
connectDB().then(() => {
  console.log("connected to database");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
