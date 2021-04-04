const { Router } = require("express");
const router = new Router();
const {
  getContact,
  sendComment,
} = require("./../controllers/contact.controller");

router.get("/", getContact);
router.post("/", sendComment);

module.exports = router;
