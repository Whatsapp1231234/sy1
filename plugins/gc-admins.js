


const handler = async (m, {conn, participants, groupMetadata, args}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_admins

  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/admins.jpg';
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const pesan = args.join` `;
  const oi = `${tradutor.texto1[3]} ${pesan}`;
  const text = `${tradutor.texto1[0]}

${oi}

${tradutor.texto1[1]}
${listAdmin}

${tradutor.texto1[2]}`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['админ <texto>'];
handler.tags = ['group'];
// регулярное выражение определяет слово без учета регистра
handler.customPrefix = /а|@/i;
handler.command = /^(дмин)$/i;
handler.group = true;
export default handler;
