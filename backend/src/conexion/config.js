const express= require('express');
const mongoose = require("mongoose");


//connection
const connectDB=async ()=>{

	try {
		await mongoose.connect(
			process.env.MONGODB_URI,
		);
		console.log('connected to db');
	} catch (error) {
		console.log('error connecting to db:',error);
	}
	
}
module.exports = connectDB;