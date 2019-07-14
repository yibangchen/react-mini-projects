const express = require("express");
const router = express.Router({ mergeParams: true});

const { createMessage, getMessage, deleteMessage } = require("../handlers/messages");

// prefix /api/users/:id/messages
router.route("/").post(createMessage);

router
	.route("/:messages_id")
	.get(getMessage)
	.delete(deleteMessage);

module.exports = router;