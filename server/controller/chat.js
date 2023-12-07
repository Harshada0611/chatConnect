const Chat = require("../model/chat");

// fetch all active  chats of current user
exports.fetch_active_chats = async (req, res) => {
  try {
    const chats = await Chat.find({
      members: {
        $in: [req.accountId],
      },
    })
      .populate("members")
      .populate("lastMessage")
      .sort({ updatedAt: -1 });
    res.send({
      success: true,
      message: "Chats fetched successfully",
      data: chats,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error fetching chats",
      error: error.message,
    });
  }
};

// create new chat
exports.create_new_chat = async (req, res) => {
  try {
    const newChat = new Chat.create(req.body);
    return res.json({ success: true, msg: "new chat created", newChat });
  } catch (err) {
    return json({ success: false, msg: err });
  }
};