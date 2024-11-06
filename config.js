const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237658145679";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_10_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDU5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDg0LFxuICAgICAgICA5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM5LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgODEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODUsXG4gICAgICAgIDIwLFxuICAgICAgICA0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDg4LFxuICAgICAgICAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0NzdHd25XR3Y4c2RnTm1ITXdTbVRRdmVLS1EveFE5a2diTWc4U0t4L0tZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTMnJIa2RsWlNSV1I4Mk9IR2xaQ1pnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU5NTdiNzY3LWE4YmEtNGM2OS1iNzA0LTlkNzkyMDJjZmRjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMjAxLFxuICAgICAgMTc3LFxuICAgICAgMjEzLFxuICAgICAgNixcbiAgICAgIDIzNyxcbiAgICAgIDIwOSxcbiAgICAgIDIzNCxcbiAgICAgIDEzMyxcbiAgICAgIDExNSxcbiAgICAgIDE1NCxcbiAgICAgIDE5MSxcbiAgICAgIDI0MSxcbiAgICAgIDEyOSxcbiAgICAgIDE0LFxuICAgICAgNTgsXG4gICAgICAyMTEsXG4gICAgICAxODMsXG4gICAgICAxMzQsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTQ1LFxuICAgICAgMjI5LFxuICAgICAgNDAsXG4gICAgICAxODgsXG4gICAgICA2MyxcbiAgICAgIDIxOCxcbiAgICAgIDE2MSxcbiAgICAgIDYwLFxuICAgICAgMjU1LFxuICAgICAgMTc4LFxuICAgICAgMjMxLFxuICAgICAgMTczLFxuICAgICAgNjAsXG4gICAgICAyMTYsXG4gICAgICAxMjksXG4gICAgICAxMzIsXG4gICAgICAzOSxcbiAgICAgIDUwLFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIzSEczRDJGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTgxNDU2Nzk6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ4MTQyMzU1NTY2NjE2OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QK2hYUVE2ZXFvdVFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUnk4TXpLOWt4c0lZSlphNU1VdlRHeENDZVVqYnFucHRzSWxudnpacy9SOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHMUFVditOc3pIQkp0c2hXaFZVR29pQm0vNStlYkRXZ1FEZGd5V2tIOUl1OHp5LzZDWS9IMDJiSXpTQUx4M1ZmNDBCMll4ajJRZFM3cHZPSm5vOStCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmOS9PQWc3M2ZucmdSYnBOUEVYQ2VJeG5ibENvQytyamhTNDlqUXdyRWV5S3kwRWhRaDJKZmVUeXczd0ZCQ2VFb2VqZm9ySjQvL09mdDBzYTZMb21qZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTgxNDU2Nzk6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA4MTk0Mzdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
