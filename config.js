const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349064616550";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_55_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NyxcbiAgICAgICAgOTksXG4gICAgICAgIDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNixcbiAgICAgICAgODAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NixcbiAgICAgICAgMTI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMixcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZleHEzNDJxSmlEUmt3bDJCUWlRS1lDVHQxTkl3eWtEWGpMOURBY081b1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpWdXI4RllIVDBDajlBeUZadEVnTGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjI1ZWJiZTctZmQ0NC00ZTU0LTg0ZjUtMzYzMTE4OTFhYmE0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDIwMCxcbiAgICAgIDE3NyxcbiAgICAgIDIxNixcbiAgICAgIDIwNyxcbiAgICAgIDE1OSxcbiAgICAgIDIyNSxcbiAgICAgIDE0NSxcbiAgICAgIDE5OSxcbiAgICAgIDIzNixcbiAgICAgIDE2MixcbiAgICAgIDE3NCxcbiAgICAgIDE3MyxcbiAgICAgIDIyMixcbiAgICAgIDE4MixcbiAgICAgIDQsXG4gICAgICAzNyxcbiAgICAgIDIzMyxcbiAgICAgIDI1NCxcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICA5NyxcbiAgICAgIDEyNCxcbiAgICAgIDI2LFxuICAgICAgMTA2LFxuICAgICAgODIsXG4gICAgICAyNyxcbiAgICAgIDEwNixcbiAgICAgIDIwNCxcbiAgICAgIDEzLFxuICAgICAgMTU5LFxuICAgICAgNTYsXG4gICAgICAxNjMsXG4gICAgICAxOTksXG4gICAgICAzMCxcbiAgICAgIDEwMixcbiAgICAgIDU0LFxuICAgICAgMTAyLFxuICAgICAgMTU3LFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk45MVpGWkpMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY0NjE2NTUwOjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDA4NzYxOTg5MzI2NDA6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmJTMG9rQkVOend3cklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRZ0FSYXVLUnBIUEV1WWFCSnBLcEd6cFRqOFJJQ3RnU1FmWVY2bW1OUGpnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpQWlZQN0xobUhUd1BTOE96Y2FTMmY2bEZXSm9RM21lUU1BTDBCVy9sS3NyVUp1OWc0SWJ5WlZmcytkZVJFTFFBdnk5R3pzeFVSa1BWQjVEZHU3ckRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhHTzNHT2NocElNdjZITmpPQ0FFbXZBRGw0VnZVcTZOcm9EU3B6bFdkOTFMTFZ1VzJJNml0eUk1UEVDY09DK3RKc2pmMTIwWUZadThDWFhMUlJzamd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjQ2MTY1NTA6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY1NjYxMTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
