const express = require("express");
const router = express.Router();
// middleware
const authMiddleware = require("../middlware/middleware");
// controller
const {
  create_new_chat,
  fetch_active_chats,
  clear_unread_messages,
} = require("../controller/chat");

router.get("/fetch-active-chats", authMiddleware, fetch_active_chats);
router.post("/create-new-chat", authMiddleware, create_new_chat);
router.post("/clear-unread-messages/:chatId", clear_unread_messages);

module.exports = router;
