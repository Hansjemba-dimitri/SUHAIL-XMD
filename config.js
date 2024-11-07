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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_01_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTMwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUwLFxuICAgICAgICA0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMzksXG4gICAgICAgIDcxLFxuICAgICAgICA5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NixcbiAgICAgICAgOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDc0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyLFxuICAgICAgICA2MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1PclIzN09HSWZCUUdmb0o0NmVEbEM3Sy9nWlZXdUZZYmhHSzVRaElTdm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlqRzZMS2JBUVFlNml2cHFfY2xWNGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGQ3NWRiNWYtMmNmMC00NDg0LTkyOWUtNjdmYjJkMmU1YmI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NCxcbiAgICAgIDkyLFxuICAgICAgOTMsXG4gICAgICA5MSxcbiAgICAgIDE2LFxuICAgICAgNjgsXG4gICAgICAxNCxcbiAgICAgIDIxNSxcbiAgICAgIDg5LFxuICAgICAgNDQsXG4gICAgICA4LFxuICAgICAgMTU3LFxuICAgICAgMTYwLFxuICAgICAgMjQsXG4gICAgICA3NyxcbiAgICAgIDIxMCxcbiAgICAgIDEwLFxuICAgICAgMjUyLFxuICAgICAgMjA4LFxuICAgICAgMTM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMjU0LFxuICAgICAgMjA1LFxuICAgICAgMTk0LFxuICAgICAgMjU0LFxuICAgICAgMTkxLFxuICAgICAgMzYsXG4gICAgICAxODgsXG4gICAgICAxMjQsXG4gICAgICAxMTcsXG4gICAgICA5OSxcbiAgICAgIDE4MyxcbiAgICAgIDE0MyxcbiAgICAgIDQ3LFxuICAgICAgMjAwLFxuICAgICAgMTMsXG4gICAgICAyLFxuICAgICAgMTIsXG4gICAgICAwLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZNVlE4SFRMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2NTgxNDU2Nzk6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ4MTQyMzU1NTY2NjE2OjM2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QK2hYUVE2T2V4dVFZWUJ5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUnk4TXpLOWt4c0lZSlphNU1VdlRHeENDZVVqYnFucHRzSWxudnpacy9SOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNRk96UitmZjk4Z0pLR3RubFZML1pxOEhrZ0h0a29JVHVXRmt3Wm5sMGpxR0tOQkExWGE2aU1LUDRWLzY0MHN3UkYvUEt1eHNrQnpFdlVaYnpHRmJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2OG85bkJ6RldOMjF5czZ6UEtlUVBTU1dhRStEZTlFYXNLU2NiQ0xIejU2empwdVJRT1gwdldlRjF2cHBOdkFWUmhxcnVKK3IrV0pZVTVmWTVlTDRnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NTgxNDU2Nzk6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA5NjY1MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLMkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUsyTC5qc29uIjogIntcImtleURhdGFcIjpcIkFDbmlWR1NNUExpQk5yTzY1dlVpNTJRdVkyODBxdG1iUXkrUnZKd3p0OW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQzMzY3NzQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
