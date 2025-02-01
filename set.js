const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_IDZokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOElobFd4c2FQV1NnNVJnRG02dW5mQTZLTXNOU2V3OUtEcUsvckI4eXVXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmZpY05TUlRvSklQeEVpRWJ0V2JtWkM2VjhVREttSEVtTDRxT3F0aGpTWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UEdSelpGbHRyRG9zbjAvWmRZYXQ2SEdTSkhTTlA1ZHBIT2wyY3R0alYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQbThKM01WZzd3SGcwQ0NjcFVwa2xWaHduaTVDNlhSY2R3ZGtDV2pydG1ZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNERUxzOUszWGxvN2R5SzE4cWw0WFRMNmlNWXVOK2w2ekkxM2VXcm9sbnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJXV3NCYlpOMEIvZTlnYjJsZjVSaXlVOHgxSzVPOGx5NFpVUGFQek9Ybm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05jZWRBbVcvN0tGTHpNVklaZjdsUnFvU2lIdjMvZ0lBbzV6eEc1b2QwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXR6TENKcFo4RWU2Ty9wS3lLZENTTFowTW5ESldTOGZUVkhJQ2FLd2lROD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNrT3l5azJSaUhEbkxpdUQ2bDM2RU0zeWN3VTJQTVpZajliYlNubWl1N0FkNndLVjNpeWlpUURwcE5oaVN5bHMxVlVuRXdhM1pBbC95UWR6MGxyZUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJ5RHF1K0dpZVF6ejVFc2pWdGdPZmRlUDdSTWl2UGFwZnRza2kvQlhnWWk4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTM3NTI5MTk0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRFMUMzOTVENEE5MjZGRTI0QURFMTBEOTU3MEFCNTk2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzgzODc2MDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkhMRDQ0UUU4IiwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sIm1lIjp7ImlkIjoiNTA5Mzc1MjkxOTQ6NjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RqvCdkbnwnZGs8J2RvfCdkbDwnZG78J2RtiDwnZq48J2aq/CdmrjwnZCYIPCdmqrwnZqv8J2ar/CdkIMiLCJsaWQiOiIxMTgzMjI2OTE1ODgzMTQ6NjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLcUNtSzRIRUkzaDlyd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNamxvcS9JYUpvZnFOZERzblk2MXEycEtJbGxudmdHK2tub2JPamtpZGlFPSIsImFjY291bnRTaWduYXR1cmUiOiJPMnZPdlRGSlNiN3U3MlZURE5hZlc2NWFmNm8yaStvWEJ0eEZSUkhPTk85SzhWM0NzaFNnN3VaOStzRGorZWRXMStheVJvUVZlOXdzaEVXNXBkQzNBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT1pXUjBkUktGTGtNZndyeFlvWldQbzFnVTdDc0FFZjRYemV6N1dhVmNtaTJ1aktxSG5ONndTSEJOV3hGTzZOZExVcVJaak45b0hZWFdCUFN5emdVQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzNzUyOTE5NDo2N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSTVhS3Z5R2lhSDZqWFE3SjJPdGF0cVNpSlpaNzRCdnBKNkd6bzVJblloIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4Mzg3NTk5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUV0eiJ9 || 'zokk',
     ETAT:process.env.ETAT,
    PREFIXE: process.env.PREFIXE,.
    NOM_OWNER: process.env.NOM_OWNER || "Zokou-Md"zokouro
    NUMERO_OWNER : process.env.NUMERO_OWNER,   509 37 529194          
    LECTURE_AUTO_STATUS: process.env.LECTURE_AUTO_STATUS || "non",
    TELECHARGER_AUTO_STATUS: process.env.TELECHARGER_AUTO_STATUS || 'non',
    MODE: process.env.MODE_PUBLIC,Non
    PM_PERMIT: process.env.PM_PERMIT || 'non',
    BOT : process.env.NOM_BOT || 'Zokou_MD',
    URL : process.env.LIENS_MENU || 'https://static.animecorner.me/2023/08/op2.jpg',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    //GPT : process.env.OPENAI_API_KEY,
    DP : process.env.STARTING_BOT_MESSAGE || 'oui',
    ATD : process.env.ANTI_DELETE_MESSAGE || 'non',            
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
