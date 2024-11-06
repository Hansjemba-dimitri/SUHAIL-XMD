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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_20_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDk5LFxuICAgICAgICA4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDczLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICA2MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTc0LFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImtRRk5hamdwcDBndVcyVFNmaU9hRnZrMkVyZFBSK0w4bG5tbUgxNWl3T1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpXRTFuVkZsUnVLcGhObW9pTk9TUmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzk2MTIxNWMtYWZmNi00M2NlLTgxYWEtNmQzMTlmOWY3YzdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMjM3LFxuICAgICAgMTU3LFxuICAgICAgMTA2LFxuICAgICAgMTUsXG4gICAgICA2MSxcbiAgICAgIDEyLFxuICAgICAgMjAzLFxuICAgICAgMTE5LFxuICAgICAgMTg0LFxuICAgICAgMTIyLFxuICAgICAgMzMsXG4gICAgICAxOCxcbiAgICAgIDExNSxcbiAgICAgIDI0NixcbiAgICAgIDYxLFxuICAgICAgMTEsXG4gICAgICAxMDgsXG4gICAgICA0LFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDc0LFxuICAgICAgMTcyLFxuICAgICAgODQsXG4gICAgICAxODAsXG4gICAgICAxODAsXG4gICAgICAxMyxcbiAgICAgIDE5LFxuICAgICAgMjA0LFxuICAgICAgMTY4LFxuICAgICAgMTA0LFxuICAgICAgMSxcbiAgICAgIDQ0LFxuICAgICAgMTYsXG4gICAgICAxNDEsXG4gICAgICAxMjAsXG4gICAgICAxMTMsXG4gICAgICAxOSxcbiAgICAgIDI0OCxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhXNzc1UERMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTgxNDU2Nzk6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ4MTQyMzU1NTY2NjE2OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QK2hYUVEwK2F1dVFZWUJTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUnk4TXpLOWt4c0lZSlphNU1VdlRHeENDZVVqYnFucHRzSWxudnpacy9SOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjU2hPMEtxWWJpaWtLeVYrYlZ2UStwSWpkaHUzRERWcUNiQnBHR0FUSjR3VzR5anJHVTBZTGMrYnBTV0dRMXlUK3Y2TFcxcFNnVXZzSi92dEQwTWdEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWMHpDY0x0MHF3Qkg0ektpMEFuZWJLTmhFaEVsTzBhaHhhR2lKODN6bEg1WlNlRWtzTU5MdXl1V1p4ZldkdFFRQ29oM1E4bDBWY2J6c0JacTdsSThDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTgxNDU2Nzk6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA5MTcyMDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLMk5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUsyTi5qc29uIjogIntcImtleURhdGFcIjpcIkVGdFlJL3pJdnZZWGNpeTA4ZnFsRGJaZnBWbXc3U3poeURZTmtNY2J6LzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQzMzY3NzQ3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
