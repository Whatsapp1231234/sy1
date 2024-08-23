

const handler = async (m, {usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.rpg_balance

  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`
Здравствуйте. Имеется бот:
 _*Хулиган*_бот-админ
°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
*Присутствуют маты*.
°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
 _*Хулиган*_ вызывает всю группу через @ , удаляет за ссылки, сносит арабов и индусов,  закрывает и открывает группу по команде. 
╔════════
╠══ *ЦЕНА БОТА*
╠  Хулиган - 500₽  месяц 
╚════════
Ответственность за работу бота я не несу. Так как бот это программа и бывает виснет, на сервере перегруз, перебой. Так же ватсап блокирует номера и бот не исключение. В случае блокировки бота, деньги не возвращаю, другого не предоставляю, так как это не моя вина.
Если вас все устраивает, скидывайте ссылку на группу.
╔════════
╠══ *Оплата*
╠   https://www.sberbank.com/sms/pbpn?requisiteNumber=79384030507
╠ 
╠ 
╠ 
╠══ *Свяжитесь с создателем*
╠ #создатель
╠ 
╚════════



`);
};
handler.customPrefix = /к|@/i;
handler.tags = ['anonymous'];
handler.command = ['упить'];
handler.private = true;
export default handler;
