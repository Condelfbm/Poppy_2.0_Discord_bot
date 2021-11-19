const Discord = require("discord.js")
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js')
const config = require("./config Poppy2.0.json")
const axios = require('axios')


// Iniciando Servidor
client.on("ready", () => {
    console.log(`A Poppy foi iniciada, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`),
    client.user.setActivity('Destruindo a humanidade...', { type: 'PLAYING' }),
    (`Eu estou em ${client.guilds.cache.size} servidores`)
});


// Ficha Config
client.on('message', message =>{
    if (message.author.bot) return
    if (message.channel.type === "dm") return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const comando = args.shift().toLowerCase()

    if (comando === "login"){
        login = message.content.split("login ")
        login = login[login.length - 1].replace(">", "")

        url = 'http://localhost:5000/ficha/' + login

        axios(url).then(response =>{
            const html = response.data
            nickname = html.nickname
            characname = html.characname
            classe = html.classe
            hp = html.hp
            forca = html.forca
            destreza = html.destreza
            constituicao = html.constituicao
            inteligencia = html.inteligencia
            sabedoria = html.sabedoria
            carisma = html.carisma
            acrobacia = html.acrobacia
            arcanismo = html.arcanismo
            atletismo = html.atletismo
            atuacao = html.atuacao
            labia = html.labia
            furtividade = html.furtividade
            historia = html.historia
            intimidacao = html.intimidacao
            intuicao = html.intuicao
            investigacao = html.investigacao
            animais = html.animais
            medicina = html.medicina
            natureza = html.natureza
            percepcao = html.percepcao
            prestigitacao = html.prestigitacao
            religiao = html.religiao
            sobrevivencia = html.sobrevivencia

        }).then(response =>{
            url = 'http://localhost:5000/ficha/' + login
            exampleEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Ficha do usuário ${nickname}`)
            .setURL('http://localhost:5000/')
            .setAuthor('Condelfbm', 'https://i.imgur.com/Nosixdk.png', 'https://www.instagram.com/debuggerking/')
            .setThumbnail('https://i.imgur.com/Nosixdk.png')
            .addFields(
                { name: `${characname}`, value: `Classe: ${classe}
                HP: ${hp}` },
                { name: 'Atributos', value: `Força: ${forca}
                Destreza: ${destreza}
                Constituição: ${constituicao}
                Inteligência: ${inteligencia}
                Sabedoria: ${sabedoria}
                Carisma: ${carisma}`},
                { name:'Perícias', value: `Acrobacia: ${acrobacia}
                Arcanismo: ${arcanismo}
                Atletismo: ${atletismo}
                Atuação: ${atuacao}
                Lábia: ${labia}
                Furtividade: ${furtividade}
                História: ${historia}
                Intimidação: ${intimidacao}
                Intuição: ${intuicao}
                Investigação: ${investigacao}
                Afinidade com animais: ${animais}
                Medicina: ${medicina}
                Natureza: ${natureza}
                Percepção: ${percepcao}
                Prestigitação: ${prestigitacao}
                Religião: ${religiao}
                Sobrevivência: ${sobrevivencia}` }
            )
            .setTimestamp()
            .setFooter('Ultima verificação', 'https://i.imgur.com/Nosixdk.png')
    
            message.channel.send(exampleEmbed)
        }).catch(err =>{
            console.log(err)
            message.channel.send("houve um erro no login, por favor tente novamente.")
        })
    }

    if (comando === "aviso") {
        console.log(url)
    }
})


// PING Config
client.on("message", async message => {
    if (message.author.bot) return
    if (message.channel.type === "dm") return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const comando = args.shift().toLowerCase();

    if (comando === "ping") {

        const m = await message.channel.send("pong!")
    }

});


// HELP Config
client.on("message", async message => {
    if (message.author.bot) return
    if (message.channel.type === "dm") return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const comando = args.shift().toLowerCase()

    if (comando === "help") {
        const m = await message.channel.send(`Olá, eu sou a Poppy e vou te apresentar a minha lista de comandos:
            **->ping:**  é um teste para ver se o servidor esta ativo.
            **->d <um valor para o dado>:**  roda dados para você, ótimo para RPG's. (Exemplo  ->d 20)
            **->login <username>:** Carrega a ficha do personagem com seus atributos. (Exemplo  ->login Poppy)`)
    };

});


// Dados config
client.on('message', message =>{
    if (message.author.bot) return
    if (message.channel.type === "dm") return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const comando = args.shift().toLowerCase()

    if (comando === "d"){
        var d = message.content.split("d")
            d = d[d.length - 1].replace(">", "")
            console.log(d)
            n1 = parseInt(d)

        valor = Math.floor(Math.random() * (n1 - 1)) + 1
        message.channel.send(`O valor apresentado no dado foi: ${valor}`)
    }
})


client.on('message', message =>{
    if (message.author.bot) return
    if (message.channel.type === "dm") return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const comando = args.shift().toLowerCase()



})


client.login(config.token)