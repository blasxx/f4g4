const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'Şablon',
    category: "mod",
    description: `Şablon komutu.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Oluşturulacak biletin türünü seçin.')
					.addOptions([
						{
							label: '⚙️ | Destek',
							description: 'Herhangi bir destek için bir bilet açın.',
							value: 'ortaklık',
						},
						{
							label: '🤝 | Partner',
							description: 'Partner yapmak için bileti açınız.',
							value: 'şikayet',
						},
                        {
							label: '🌟 | Pmco/Diamond Role',
							description: 'Pmco/Diamond rolü almak için bilet açınız.',
							value: 'yetkili',
						},
                      {
							label: '👨🏻‍💼 | Staff Alım',
							description: 'Staff olmak için bilet açınız.',
							value: 'basvur',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Bilet Açın',
                description: '**__Bir Bilet Nasıl Açılır :__**\nLütfen açmak istediğiniz bilet türünü seçin.',
                color: "BLURPLE",
                footer: {text: ''}
            }],
            components: [row]
        })
    }
}
