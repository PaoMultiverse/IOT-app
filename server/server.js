// Import các thư viện cần thiết
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Khởi tạo ứng dụng Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route cơ bản
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js Express Server!");
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Hello User ${userId}` });
});

// Route POST với body
app.post("/data", (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required!" });
  }
  res.json({ message: `Received data: Name - ${name}, Age - ${age}` });
});

// Middleware xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Server lắng nghe kết nối
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
