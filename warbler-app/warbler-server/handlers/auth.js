/*jslint
	white
*/
const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signup = async function(req, res, next){
	try {		
		//create a user
		let user = await db.User.create(req.body);
		let { id, username, profileImageUrl }= user;
		let token = jwt.sign({
			id,
			username,
			profileImageUrl
		}, process.env.SECRET_KEY);
		return res.status(200).json({
			id,
			username,
			profileImageUrl,
			token
		});
		//sign a token with .env.SECRET_KEY
	} catch(err) {
		if (err.code === 11000) {
			err.message="Sorry, that usrename and/or email is taken";
		}
		return next({
			status: 400,
			message: err.message
		});
		//see what kind of error
		//if it is a certain error
		//respond with username/email already taken
		//otherwise send back 400
	}
};

exports.signin = function(){

}