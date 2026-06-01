require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB 연결 성공!");
    process.exit();
  })
  .catch((err) => {
    console.error("MongoDB 연결 실패");
    console.error(err);
    process.exit(1);
  });