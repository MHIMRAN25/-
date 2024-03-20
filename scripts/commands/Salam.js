const fs = require("fs");
module.exports.config = {
    name: "salam",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "kawsar", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, mesওsageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("السلام عليكم") ||
     react.includes("السلام عليكم و الرحمة") || 
react.includes("assalamu alaikum") || react.includes("xan") || react.includes("xanu") || react.includes("sona") ||
react.includes("assalamu alaykum") ||
react.includes("আসসালামু আলাইকুম") || react.includes("xuna") || react.includes("ভালবাসি") ||
react.includes("আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি") ||
react.includes("আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহ") ||
react.includes("") ||
react.includes("") ||  
react.includes("") ||
react.includes("🤤")) {
		var msg = {
				body: "وعليكم السلام ورحمه الله وبركاته🥰🥰!!🌚"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
