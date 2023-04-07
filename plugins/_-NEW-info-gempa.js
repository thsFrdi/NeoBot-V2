
//by PutraModz fix Buttonmassage \\

import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

import fs from 'fs'
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
m.reply('Sedang Mendeteksi Getaran....')
let res = await fetch(`https://saipulanuar.ga/api/info/gempa`)
let data = await res.json()
let json = data.result
let deteksi = `Wᴀsᴘᴀᴅᴀ ɢᴇᴍᴘᴀ ᴛᴇʀᴅᴇᴛᴇᴋsɪ!!
🗓️ᴛᴀɴɢɢᴀʟ : ${json.tanggal}
⌚ᴊᴀᴍ : ${json.jam}
⌛ᴅᴀᴛᴇᴛɪᴍᴇ : ${json.datetime}
🗾ᴄᴏᴏʀᴅɪɴᴀᴛᴇs : ${json.coordinates}
🌏ʟɪɴᴛᴀɴɢ : ${json.lintang}
🌐ʙᴜᴊᴜʀ : ${json.bujur}
📳ᴍᴀɢɴɪᴛᴜᴅᴇ : ${json.magnitude}
🚧ᴋᴇᴅᴀʟᴀᴍᴀɴ : ${json.kedalaman}
❗ᴘᴏᴛᴇɴsɪ : ${json.potensi}
♨️ᴅɪʀᴀsᴀᴋᴀɴ : ${json.dirasakan}
`
let map = json.shakem

conn.sendButton(m.chat, '┍┈༺ *ᚯӃᶱᶮᶽᶲメ฿Ø₮™* ༻', deteksi, await (await fetch(json.shakemap)).buffer(), [
                ['Owner', `${usedPrefix}owner`],
                ['Donasi', `${usedPrefix}donasi`]
            ], m)
/*forwardingScore: fsizedoc, 
externalAdReply: { 
body: null, 
containsAutoReply: true, 
mediaType: 1, 
mediaUrl: hwaifu.getRandom(), 
renderLargerThumbnail: true, 
showAdAttribution: true, 
sourceId: null, 
sourceType: 'PDF', 
previewType: 'PDF', 
sourceUrl: null, 
thumbnail: await (await fetch(json.shakemap)).buffer(),
 thumbnailUrl: sgc,
 title: json.wilayah }}})*/
}
handler.help = ['infogempa']
handler.tags = ['info']
 handler.command = /^(infogempa|gempa)$/i
export default handler