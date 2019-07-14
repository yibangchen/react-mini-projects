/*jslint
white
*/

const db = require("../models");

// api/users/:id/messages
exports.createMessage = async function(req, res, next) {
	try {
		console.log("check point 0");
		let message = await db.Message.create({
			text: req.body.text,
			user: req.params.id
		});
		console.log("check point 1");
		let foundUser = await db.User.findById(req.params.id);
		foundUser.messages.push(message.id);
		await foundUser.save();

		let foundMessage = await db.Message.findById(message.id).populate("user", {
			username: true,
			profileImageUrl: true
		});
		console.log("check point 2");

		return res.status(200).json(foundMessage);
	} catch(err) {
		next(err);
	}
}

// api/users/:id/messages/:message_id
exports.getMessage = async function(req, res, next) {
	try {
		let message = await db.Message.find(req.params.message_id);
		return res.status(200).json(message);
	} catch(err) {
		return next(err);
	}

}

// api/users/:id/messages/:message_id
exports.deleteMessage = async function(req, res, next) {
	try {
		let foundMessage = await db.Message.findById(req.params.message_id);
		await foundMessage.remove();
		return res.status(200).json(foundMessage);
	} catch(err) {
		return next(err);
	}

}