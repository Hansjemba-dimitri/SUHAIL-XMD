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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,237658145679,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_04_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU4LFxuICAgICAgICA0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDg4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDk4LFxuICAgICAgICA0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNixcbiAgICAgICAgMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODMsXG4gICAgICAgIDI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDM2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1DS1Jnd3FJOW1kb29FOGE4azV1SWtQWnNyVFpiaytWOEU5VDJVVXQ0L2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIms1TmlHSXBnU0UyZmhJVnhGdVpIVHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmUwN2JjYzUtNjlkYi00MzhhLThkZGYtYzUxMDVmZmM5MGVlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDU2LFxuICAgICAgNyxcbiAgICAgIDEzLFxuICAgICAgMTU5LFxuICAgICAgMjQ4LFxuICAgICAgMTE2LFxuICAgICAgMjQwLFxuICAgICAgMTIzLFxuICAgICAgNzYsXG4gICAgICAyNCxcbiAgICAgIDIxNCxcbiAgICAgIDIzMCxcbiAgICAgIDIxOSxcbiAgICAgIDE4MSxcbiAgICAgIDE4NixcbiAgICAgIDEzMSxcbiAgICAgIDIxMSxcbiAgICAgIDI3LFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMjQ2LFxuICAgICAgMTYyLFxuICAgICAgMTU1LFxuICAgICAgNjIsXG4gICAgICA4MSxcbiAgICAgIDEzOCxcbiAgICAgIDIyNSxcbiAgICAgIDIwMSxcbiAgICAgIDEzMCxcbiAgICAgIDI0MCxcbiAgICAgIDE3NyxcbiAgICAgIDE4MixcbiAgICAgIDE5MCxcbiAgICAgIDEzOCxcbiAgICAgIDI0MCxcbiAgICAgIDEwNixcbiAgICAgIDgxLFxuICAgICAgMTU3LFxuICAgICAgNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkNONjZTRTlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1ODE0NTY3OTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDgxNDIzNTU1NjY2MTY6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVAraFhRUS9JcmZ1UVlZQ1NBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJSeThNeks5a3hzSVlKWmE1TVV2VEd4Q0NlVWpicW5wdHNJbG52elpzL1I4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBpcHRycjg5a0dRUElURGoyS2M2cVJFS1JlK1VuRDBPMTZXYXVnMWFiSnNzUHg1ZWZxMm1WNnJ0OGR4QVh3TGxBOVA1OWJZZXBvbFh2WTl4cUwzS0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhnQXJtUjRqTE9HM3R2TXNoR2tLbCt4aGI4L2F2Nk0xRUtlVExyT0FRVkFiYUYrRVJmY0xGQTNsQU45SElVZ3NTNVhQZTdxaFBQTU5wVHd1VmhpT2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNzY1ODE0NTY3OTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTcwODI4OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUsyTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzJMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQUNuaVZHU01QTGlCTnJPNjV2VWk1MlF1WTI4MHF0bWJReStSdkp3enQ5bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNDMzNjc3NDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
