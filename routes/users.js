const { Router } = require("express");
const router = new Router();
const multer = require("multer");
const config = { dest: "./public/tmp" }; // Guardado temporal
const upload = multer(config);
const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controllers/users.controller");

router.get("/", getUsers);
router.get("/:id", getSingleUser);
router.post("/new", createUser);
// middleware que lee el input con name "image"
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
