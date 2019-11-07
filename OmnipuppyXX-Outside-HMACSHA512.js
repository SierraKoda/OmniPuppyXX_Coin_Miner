 function intervalFunc() { console.log("initializing...");

var crypto = require("crypto");
function encrypt(key, str) {
	
	var hmac = crypto.createHmac("sha512", key);
	var signed = hmac.update(new Buffer(str, 'utf-8')).digest("base64");
	
	console.log(signed);
	
     }
     
 } setInterval(intervalFunc, 1000);