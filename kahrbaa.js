const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://�����_���_�����.glitch.me/`);
}, 280000);
 

// ���� ����� ����� ��� ��� ���� ����� ��� ���� ������ ��� ����� ���� ������ ������� ����� ���� ��� ��� ���� ���� 10 ������� � ����� ��
// 
const Discord = require('discord.js');
const initcmd = '#';
const serverid = "667342922185834507"; 
const roomid = "667342950010716171";
const KahrbaaID = "433267027822641153";
const GroupNM = "b";
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const settings = require("./config.json"); 

client.on('ready', () => {
  console.log(`[Kahrbaa] : ������ ��� ���� ����`);
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});
client2.on('ready', () => {
  console.log(`[Kahrbaa] : ������ ��� ����� ���� `);
  console.log(`Hi ${client2.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`);
});
client3.on('ready', () => {
  console.log(`[Kahrbaa] : ������ ��� 3 ����`);
  console.log(`Hi ${client3.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
client4.on('ready', () => {
  console.log(`[Kahrbaa] : ������ ��� 4 ����`);
  console.log(`Hi ${client4.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client4.guilds.size} " ]`);
});
client5.on('ready', () => {
  console.log(`[Kahrbaa] : ������ ��� 5 ����`);
  console.log(`Hi ${client5.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client5.guilds.size} " ]`);
});
client6.on('ready', () => {
  console.log(`[Kahrbaa] : ������ ��� 6 ����`);
  console.log(`Hi ${client6.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client6.guilds.size} " ]`);
});
client7.on('ready', () => {
  console.log(`[Kahrbaa] : ������ ��� 7 ����`);
  console.log(`Hi ${client7.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client7.guilds.size} " ]`);
});
client8.on('ready', () => {
  console.log(`[Kahrbaa] : ������ ��� 8 ����`);
  console.log(`Hi ${client8.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client8.guilds.size} " ]`);
});
client9.on('ready', () => {
  console.log(`[Kahrbaa] : ������ ��� 9 ����`);
  console.log(`Hi ${client9.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client9.guilds.size} " ]`);
});
client10.on('ready', () => {
  console.log(`[Kahrbaa] : ������ ��� 10 ����`);
  console.log(`Hi ${client10.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client10.guilds.size} " ]`);
});


client.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client2.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client3.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client4.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client5.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client6.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client7.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client8.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client9.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});
client10.on('message', message => {
    if(message.content === initcmd +'dly'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client2.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client3.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client4.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client5.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client6.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client7.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client8.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client9.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});
client10.on('message', message => {
	
	  if (!KahrbaaID.includes(message.author.id)) return;
    if(message.content === initcmd +'repadmin'){
        message.channel.send("#rep "+"<@" + KahrbaaID + ">")
    }
});



client.on('ready', async () => {

let Kahrbaa = ['����� ����',
         '����� ��� ��� ������� ����� �� ���� ���� ��� ����� ������� �������� ������� �� ��������',
         '������ ����',
         '����� ����',
         '�� ��� ��� ����',
         '����� ����',
         '��� ����',
         '������ �� ������ ������',
         '����� ��� ����',
         '��� ��� ��� ���� ���',
         '����� ������',
         'Happy new Year Guys',
         '�������� ����� �������',
         '�� ��� ����� �����',
         '���',
         '��� ���� ���� ����� ������ ������',
         '����� �����',
         '����� ���� ���',
         '�� ���� ������ ��� �������',
         '�� ����� ������',
         '�',
         'okey',
         '�',
         '���� ������ 6 ���� �������� ����',
         '���� ������� ��� ��� �',
         '��������� �������',
         '��� �������  ����',
         '����� � ������',
         '.�� ��� ���� ������ �� ���ѡ',
         ' "����� ���� ������� ����� ��� ����� ������� ����� . ��� ����� ���� ����� ����� ���� ��� ����� � �����',
         '"��� ���� ��� ����� � ������� ������ �� ��� ������� ���� ������� �� ����� ������� ',
         '" "�� ������ ������� ���� ������ � ��� �� ���� ������� ����� ������ � ����� "',
         ' "�� ����� �� ������ �� ��� �����',
         ' �� ������ ������ " "����� ���� ',
         '���� ����� � �� ���� �',
         '���� ��� ���� ����� "',
         ' "��� ������ ����� ���',
         '�� ������ � ��� ������ ������� � ',
         '�� ���� ����� ����" "���� �����',
         ' ����� ������ �� ����� �',
         '" "������� ���� �� ������ �����',
         ' ��� ����� �� ��� ����� �� ����� ������� ������ ��� ������� ��� �������� ',
         '" "������ ���� ��� ����� ���� �� ���� ��������',
         ' �� ������ ������� ��� ����� �����" "������� �',
         '�� ���� ���� ��� ���� ��� ��� � ',
         '���� ��� ����',
         '����� ����',
         '������ ������� ������',
         '����� �� �����',
         '������',
         '���� ������ �������',
         '�����',
         '����� ������',
         '����� ��� ����� ������ ����',
         '�� ���',
         '����',
         '����� � ���� ������ ��� ',
         '����� ���� ������ ����� ���� ������',
         '������ ���� ������',
         '����� ���',
         '�� ��� ��� ����',
         '���� ���� �� ��� ��� �� ���� ����� ��� �� ����� ������'
    , '����� ���� �� ����� ����� ���� ������� ������ ������ ����',
         '? ��� �? ��� ��� �����'
    , '�� ������� ��� ������ �����']

  setInterval(() => {
client.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},60000);
});


client2.on('ready', async () => {

let Kahrbaa = ['����� ����',
         '����� ��� ��� ������� ����� �� ���� ���� ��� ����� ������� �������� ������� �� ��������',
         '������ ����',
         '����� ����',
         '�� ��� ��� ����',
         '����� ����',
         '��� ����',
         '������ �� ������ ������',
         '����� ��� ����',
         '��� ��� ��� ���� ���',
         '����� ������',
         'Happy new Year Guys',
         '�������� ����� �������',
         '�� ��� ����� �����',
         '���',
         '��� ���� ���� ����� ������ ������',
         '����� �����',
         '����� ���� ���',
         '�� ���� ������ ��� �������',
         '�� ����� ������',
         '�',
         'okey',
         '�',
         '���� ������ 6 ���� �������� ����',
         '���� ������� ��� ��� �',
         '��������� �������',
         '��� �������  ����',
         '����� � ������',
         '.�� ��� ���� ������ �� ���ѡ',
         ' "����� ���� ������� ����� ��� ����� ������� ����� . ��� ����� ���� ����� ����� ���� ��� ����� � �����',
         '"��� ���� ��� ����� � ������� ������ �� ��� ������� ���� ������� �� ����� ������� ',
         '" "�� ������ ������� ���� ������ � ��� �� ���� ������� ����� ������ � ����� "',
         ' "�� ����� �� ������ �� ��� �����',
         ' �� ������ ������ " "����� ���� ',
         '���� ����� � �� ���� �',
         '���� ��� ���� ����� "',
         ' "��� ������ ����� ���',
         '�� ������ � ��� ������ ������� � ',
         '�� ���� ����� ����" "���� �����',
         ' ����� ������ �� ����� �',
         '" "������� ���� �� ������ �����',
         ' ��� ����� �� ��� ����� �� ����� ������� ������ ��� ������� ��� �������� ',
         '" "������ ���� ��� ����� ���� �� ���� ��������',
         ' �� ������ ������� ��� ����� �����" "������� �',
         '�� ���� ���� ��� ���� ��� ��� � ',
         '���� ��� ����',
         '����� ����',
         '������ ������� ������',
         '����� �� �����',
         '������',
         '���� ������ �������',
         '�����',
         '����� ������',
         '����� ��� ����� ������ ����',
         '�� ���',
         '����',
         '����� � ���� ������ ��� ',
         '����� ���� ������ ����� ���� ������',
         '������ ���� ������',
         '����� ���',
         '�� ��� ��� ����',
         '���� ���� �� ��� ��� �� ���� ����� ��� �� ����� ������'
    , '����� ���� �� ����� ����� ���� ������� ������ ������ ����',
         '? ��� �? ��� ��� �����'
    , '�� ������� ��� ������ �����']

  setInterval(() => {
client2.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},60000);
});

client3.on('ready', async () => {

let Kahrbaa = ['����� ����',
         '����� ��� ��� ������� ����� �� ���� ���� ��� ����� ������� �������� ������� �� ��������',
         '������ ����',
         '����� ����',
         '�� ��� ��� ����',
         '����� ����',
         '��� ����',
         '������ �� ������ ������',
         '.�� ��� ���� ������ �� ���ѡ',
         ' "����� ���� ������� ����� ��� ����� ������� ����� . ��� ����� ���� ����� ����� ���� ��� ����� � �����',
         '"��� ���� ��� ����� � ������� ������ �� ��� ������� ���� ������� �� ����� ������� ',
         '" "�� ������ ������� ���� ������ � ��� �� ���� ������� ����� ������ � ����� "',
         ' "�� ����� �� ������ �� ��� �����',
         ' �� ������ ������ " "����� ���� ',
         '���� ����� � �� ���� �',
         '���� ��� ���� ����� "',
         ' "��� ������ ����� ���',
         '�� ������ � ��� ������ ������� � ',
         '�� ���� ����� ����" "���� �����',
         ' ����� ������ �� ����� �',
         '" "������� ���� �� ������ �����',
         ' ��� ����� �� ��� ����� �� ����� ������� ������ ��� ������� ��� �������� ',
         '" "������ ���� ��� ����� ���� �� ���� ��������',
         ' �� ������ ������� ��� ����� �����" "������� �',
         '�� ���� ���� ��� ���� ��� ��� � ',
         '���� ��� ����',
         '����� ����',
         '������ ������� ������',
         '����� �� �����',
         '������',
         '���� ������ �������',
         '�����',
         '����� ������',
         '����� ��� ����� ������ ����',
         '�� ���',
         '����',
         '����� � ���� ������ ��� ',
         '����� ���� ������ ����� ���� ������',
         '������ ���� ������',
         '����� ���',
         '�� ��� ��� ����',
         '���� ���� �� ��� ��� �� ���� ����� ��� �� ����� ������'
    , '����� ���� �� ����� ����� ���� ������� ������ ������ ����',
         '? ��� �? ��� ��� �����'
    , '�� ������� ��� ������ �����']

  setInterval(() => {
client3.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},60000);
});

client4.on('ready', async () => {

let Kahrbaa = ['����� ����',
         '����� ��� ��� ������� ����� �� ���� ���� ��� ����� ������� �������� ������� �� ��������',
         '������ ����',
         '����� ����',
         '�� ��� ��� ����',
         '����� ����',
         '��� ����',
         '������ �� ������ ������',
         '����� ��� ����',
         '��� ��� ��� ���� ���',
         '����� ������',
         'Happy new Year Guys',
         '�������� ����� �������',
         '�� ��� ����� �����',
         '���',
         '��� ���� ���� ����� ������ ������',
         '����� �����',
         '����� ���� ���',
         '�� ���� ������ ��� �������',
         '�� ����� ������',
         '�',
         'okey',
         '�',
         '���� ������ 6 ���� �������� ����',
         '���� ������� ��� ��� �',
         '��������� �������',
         '��� �������  ����',
         '����� � ������',
         '.�� ��� ���� ������ �� ���ѡ',
         ' "����� ���� ������� ����� ��� ����� ������� ����� . ��� ����� ���� ����� ����� ���� ��� ����� � �����',
         '"��� ���� ��� ����� � ������� ������ �� ��� ������� ���� ������� �� ����� ������� ',
         '" "�� ������ ������� ���� ������ � ��� �� ���� ������� ����� ������ � ����� "',
         ' "�� ����� �� ������ �� ��� �����',
         ' �� ������ ������ " "����� ���� ',
         '���� ����� � �� ���� �',
         '���� ��� ���� ����� "',
         ' "��� ������ ����� ���',
         '�� ������ � ��� ������ ������� � ',
         '�� ���� ����� ����" "���� �����',
         ' ����� ������ �� ����� �',
         '" "������� ���� �� ������ �����',
         ' ��� ����� �� ��� ����� �� ����� ������� ������ ��� ������� ��� �������� ',
         '" "������ ���� ��� ����� ���� �� ���� ��������',
         ' �� ������ ������� ��� ����� �����" "������� �',
         '�� ���� ���� ��� ���� ��� ��� � ',
         '���� ��� ����',
         '����� ����',
         '������ ������� ������',
         '����� �� �����',
         '������',
         '���� ������ �������',
         '�����',
         '����� ������',
         '����� ��� ����� ������ ����',
         '�� ���',
         '����',
         '����� � ���� ������ ��� ',
         '����� ���� ������ ����� ���� ������',
         '������ ���� ������',
         '����� ���',
         '�� ��� ��� ����',
         '���� ���� �� ��� ��� �� ���� ����� ��� �� ����� ������'
    , '����� ���� �� ����� ����� ���� ������� ������ ������ ����',
         '? ��� �? ��� ��� �����'
    , '�� ������� ��� ������ �����']

  setInterval(() => {
client4.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},60000);
});

client5.on('ready', async () => {

let Kahrbaa = ['����� ����',
         '����� ��� ��� ������� ����� �� ���� ���� ��� ����� ������� �������� ������� �� ��������',
         '������ ����',
         '����� ����',
         '�� ��� ��� ����',
         '����� ����',
         '��� ����',
         '������ �� ������ ������',
         '.�� ��� ���� ������ �� ���ѡ',
         ' "����� ���� ������� ����� ��� ����� ������� ����� . ��� ����� ���� ����� ����� ���� ��� ����� � �����',
         '"��� ���� ��� ����� � ������� ������ �� ��� ������� ���� ������� �� ����� ������� ',
         '" "�� ������ ������� ���� ������ � ��� �� ���� ������� ����� ������ � ����� "',
         ' "�� ����� �� ������ �� ��� �����',
         ' �� ������ ������ " "����� ���� ',
         '���� ����� � �� ���� �',
         '���� ��� ���� ����� "',
         ' "��� ������ ����� ���',
         '�� ������ � ��� ������ ������� � ',
         '�� ���� ����� ����" "���� �����',
         ' ����� ������ �� ����� �',
         '" "������� ���� �� ������ �����',
         ' ��� ����� �� ��� ����� �� ����� ������� ������ ��� ������� ��� �������� ',
         '" "������ ���� ��� ����� ���� �� ���� ��������',
         ' �� ������ ������� ��� ����� �����" "������� �',
         '�� ���� ���� ��� ���� ��� ��� � ',
         '���� ��� ����',
         '����� ����',
         '������ ������� ������',
         '����� �� �����',
         '������',
         '���� ������ �������',
         '�����',
         '����� ������',
         '����� ��� ����� ������ ����',
         '�� ���',
         '����',
         '����� � ���� ������ ��� ',
         '����� ���� ������ ����� ���� ������',
         '������ ���� ������',
         '����� ���',
         '�� ��� ��� ����',
         '���� ���� �� ��� ��� �� ���� ����� ��� �� ����� ������'
    , '����� ���� �� ����� ����� ���� ������� ������ ������ ����',
         '? ��� �? ��� ��� �����'
    , '�� ������� ��� ������ �����']

  setInterval(() => {
client5.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},60000);
});

client6.on('ready', async () => {

let Kahrbaa = ['����� ����',
         '����� ��� ��� ������� ����� �� ���� ���� ��� ����� ������� �������� ������� �� ��������',
         '������ ����',
         '����� ����',
         '�� ��� ��� ����',
         '����� ����',
         '��� ����',
         '������ �� ������ ������',
         '����� ��� ����',
         '��� ��� ��� ���� ���',
         '����� ������',
         'Happy new Year Guys',
         '�������� ����� �������',
         '�� ��� ����� �����',
         '���',
         '��� ���� ���� ����� ������ ������',
         '����� �����',
         '����� ���� ���',
         '�� ���� ������ ��� �������',
         '�� ����� ������',
         '�',
         'okey',
         '�',
         '���� ������ 6 ���� �������� ����',
         '���� ������� ��� ��� �',
         '��������� �������',
         '��� �������  ����',
         '����� � ������',
         '.�� ��� ���� ������ �� ���ѡ',
         ' "����� ���� ������� ����� ��� ����� ������� ����� . ��� ����� ���� ����� ����� ���� ��� ����� � �����',
         '"��� ���� ��� ����� � ������� ������ �� ��� ������� ���� ������� �� ����� ������� ',
         '" "�� ������ ������� ���� ������ � ��� �� ���� ������� ����� ������ � ����� "',
         ' "�� ����� �� ������ �� ��� �����',
         ' �� ������ ������ " "����� ���� ',
         '���� ����� � �� ���� �',
         '���� ��� ���� ����� "',
         ' "��� ������ ����� ���',
         '�� ������ � ��� ������ ������� � ',
         '�� ���� ����� ����" "���� �����',
         ' ����� ������ �� ����� �',
         '" "������� ���� �� ������ �����',
         ' ��� ����� �� ��� ����� �� ����� ������� ������ ��� ������� ��� �������� ',
         '" "������ ���� ��� ����� ���� �� ���� ��������',
         ' �� ������ ������� ��� ����� �����" "������� �',
         '�� ���� ���� ��� ���� ��� ��� � ',
         '���� ��� ����',
         '����� ����',
         '������ ������� ������',
         '����� �� �����',
         '������',
         '���� ������ �������',
         '�����',
         '����� ������',
         '����� ��� ����� ������ ����',
         '�� ���',
         '����',
         '����� � ���� ������ ��� ',
         '����� ���� ������ ����� ���� ������',
         '������ ���� ������',
         '����� ���',
         '�� ��� ��� ����',
         '���� ���� �� ��� ��� �� ���� ����� ��� �� ����� ������'
    , '����� ���� �� ����� ����� ���� ������� ������ ������ ����',
         '? ��� �? ��� ��� �����'
    , '�� ������� ��� ������ �����']

  setInterval(() => {
client6.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},60000);
});

client7.on('ready', async () => {

let Kahrbaa = ['����� ����',
         '����� ��� ��� ������� ����� �� ���� ���� ��� ����� ������� �������� ������� �� ��������',
         '������ ����',
         '����� ����',
         '�� ��� ��� ����',
         '����� ����',
         '��� ����',
         '������ �� ������ ������',
         '.�� ��� ���� ������ �� ���ѡ',
         ' "����� ���� ������� ����� ��� ����� ������� ����� . ��� ����� ���� ����� ����� ���� ��� ����� � �����',
         '"��� ���� ��� ����� � ������� ������ �� ��� ������� ���� ������� �� ����� ������� ',
         '" "�� ������ ������� ���� ������ � ��� �� ���� ������� ����� ������ � ����� "',
         ' "�� ����� �� ������ �� ��� �����',
         ' �� ������ ������ " "����� ���� ',
         '���� ����� � �� ���� �',
         '���� ��� ���� ����� "',
         ' "��� ������ ����� ���',
         '�� ������ � ��� ������ ������� � ',
         '�� ���� ����� ����" "���� �����',
         ' ����� ������ �� ����� �',
         '" "������� ���� �� ������ �����',
         ' ��� ����� �� ��� ����� �� ����� ������� ������ ��� ������� ��� �������� ',
         '" "������ ���� ��� ����� ���� �� ���� ��������',
         ' �� ������ ������� ��� ����� �����" "������� �',
         '�� ���� ���� ��� ���� ��� ��� � ',
         '���� ��� ����',
         '����� ����',
         '������ ������� ������',
         '����� �� �����',
         '������',
         '���� ������ �������',
         '�����',
         '����� ������',
         '����� ��� ����� ������ ����',
         '�� ���',
         '����',
         '����� � ���� ������ ��� ',
         '����� ���� ������ ����� ���� ������',
         '������ ���� ������',
         '����� ���',
         '�� ��� ��� ����',
         '���� ���� �� ��� ��� �� ���� ����� ��� �� ����� ������'
    , '����� ���� �� ����� ����� ���� ������� ������ ������ ����',
         '? ��� �? ��� ��� �����'
    , '�� ������� ��� ������ �����']

  setInterval(() => {
client7.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},60000);
});

client8.on('ready', async () => {

let Kahrbaa = ['����� ����',
         '����� ��� ��� ������� ����� �� ���� ���� ��� ����� ������� �������� ������� �� ��������',
         '������ ����',
         '����� ����',
         '�� ��� ��� ����',
         '����� ����',
         '��� ����',
         '������ �� ������ ������',
         '����� ��� ����',
         '��� ��� ��� ���� ���',
         '����� ������',
         'Happy new Year Guys',
         '�������� ����� �������',
         '�� ��� ����� �����',
         '���',
         '��� ���� ���� ����� ������ ������',
         '����� �����',
         '����� ���� ���',
         '�� ���� ������ ��� �������',
         '�� ����� ������',
         '�',
         'okey',
         '�',
         '���� ������ 6 ���� �������� ����',
         '���� ������� ��� ��� �',
         '��������� �������',
         '��� �������  ����',
         '����� � ������',
         '.�� ��� ���� ������ �� ���ѡ',
         ' "����� ���� ������� ����� ��� ����� ������� ����� . ��� ����� ���� ����� ����� ���� ��� ����� � �����',
         '"��� ���� ��� ����� � ������� ������ �� ��� ������� ���� ������� �� ����� ������� ',
         '" "�� ������ ������� ���� ������ � ��� �� ���� ������� ����� ������ � ����� "',
         ' "�� ����� �� ������ �� ��� �����',
         ' �� ������ ������ " "����� ���� ',
         '���� ����� � �� ���� �',
         '���� ��� ���� ����� "',
         ' "��� ������ ����� ���',
         '�� ������ � ��� ������ ������� � ',
         '�� ���� ����� ����" "���� �����',
         ' ����� ������ �� ����� �',
         '" "������� ���� �� ������ �����',
         ' ��� ����� �� ��� ����� �� ����� ������� ������ ��� ������� ��� �������� ',
         '" "������ ���� ��� ����� ���� �� ���� ��������',
         ' �� ������ ������� ��� ����� �����" "������� �',
         '�� ���� ���� ��� ���� ��� ��� � ',
         '���� ��� ����',
         '����� ����',
         '������ ������� ������',
         '����� �� �����',
         '������',
         '���� ������ �������',
         '�����',
         '����� ������',
         '����� ��� ����� ������ ����',
         '�� ���',
         '����',
         '����� � ���� ������ ��� ',
         '����� ���� ������ ����� ���� ������',
         '������ ���� ������',
         '����� ���',
         '�� ��� ��� ����',
         '���� ���� �� ��� ��� �� ���� ����� ��� �� ����� ������'
    , '����� ���� �� ����� ����� ���� ������� ������ ������ ����',
         '? ��� �? ��� ��� �����'
    , '�� ������� ��� ������ �����']

  setInterval(() => {
client8.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},60000);
});

client9.on('ready', async () => {

let Kahrbaa = ['����� ����',
         '����� ��� ��� ������� ����� �� ���� ���� ��� ����� ������� �������� ������� �� ��������',
         '������ ����',
         '����� ����',
         '�� ��� ��� ����',
         '����� ����',
         '��� ����',
         '������ �� ������ ������',
         '.�� ��� ���� ������ �� ���ѡ',
         ' "����� ���� ������� ����� ��� ����� ������� ����� . ��� ����� ���� ����� ����� ���� ��� ����� � �����',
         '"��� ���� ��� ����� � ������� ������ �� ��� ������� ���� ������� �� ����� ������� ',
         '" "�� ������ ������� ���� ������ � ��� �� ���� ������� ����� ������ � ����� "',
         ' "�� ����� �� ������ �� ��� �����',
         ' �� ������ ������ " "����� ���� ',
         '���� ����� � �� ���� �',
         '���� ��� ���� ����� "',
         ' "��� ������ ����� ���',
         '�� ������ � ��� ������ ������� � ',
         '�� ���� ����� ����" "���� �����',
         ' ����� ������ �� ����� �',
         '" "������� ���� �� ������ �����',
         ' ��� ����� �� ��� ����� �� ����� ������� ������ ��� ������� ��� �������� ',
         '" "������ ���� ��� ����� ���� �� ���� ��������',
         ' �� ������ ������� ��� ����� �����" "������� �',
         '�� ���� ���� ��� ���� ��� ��� � ',
         '���� ��� ����',
         '����� ����',
         '������ ������� ������',
         '����� �� �����',
         '������',
         '���� ������ �������',
         '�����',
         '����� ������',
         '����� ��� ����� ������ ����',
         '�� ���',
         '����',
         '����� � ���� ������ ��� ',
         '����� ���� ������ ����� ���� ������',
         '������ ���� ������',
         '����� ���',
         '�� ��� ��� ����',
         '���� ���� �� ��� ��� �� ���� ����� ��� �� ����� ������'
    , '����� ���� �� ����� ����� ���� ������� ������ ������ ����',
         '? ��� �? ��� ��� �����'
    , '�� ������� ��� ������ �����']

  setInterval(() => {
client9.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},60000);
});

client10.on('ready', async () => {

let Kahrbaa = ['����� ����',
         '����� ��� ��� ������� ����� �� ���� ���� ��� ����� ������� �������� ������� �� ��������',
         '������ ����',
         '����� ����',
         '�� ��� ��� ����',
         '����� ����',
         '��� ����',
         '������ �� ������ ������',
         '����� ��� ����',
         '��� ��� ��� ���� ���',
         '����� ������',
         'Happy new Year Guys',
         '�������� ����� �������',
         '�� ��� ����� �����',
         '���',
         '��� ���� ���� ����� ������ ������',
         '����� �����',
         '����� ���� ���',
         '�� ���� ������ ��� �������',
         '�� ����� ������',
         '�',
         'okey',
         '�',
         '���� ������ 6 ���� �������� ����',
         '���� ������� ��� ��� �',
         '��������� �������',
         '��� �������  ����',
         '����� � ������',
         '.�� ��� ���� ������ �� ���ѡ',
         ' "����� ���� ������� ����� ��� ����� ������� ����� . ��� ����� ���� ����� ����� ���� ��� ����� � �����',
         '"��� ���� ��� ����� � ������� ������ �� ��� ������� ���� ������� �� ����� ������� ',
         '" "�� ������ ������� ���� ������ � ��� �� ���� ������� ����� ������ � ����� "',
         ' "�� ����� �� ������ �� ��� �����',
         ' �� ������ ������ " "����� ���� ',
         '���� ����� � �� ���� �',
         '���� ��� ���� ����� "',
         ' "��� ������ ����� ���',
         '�� ������ � ��� ������ ������� � ',
         '�� ���� ����� ����" "���� �����',
         ' ����� ������ �� ����� �',
         '" "������� ���� �� ������ �����',
         ' ��� ����� �� ��� ����� �� ����� ������� ������ ��� ������� ��� �������� ',
         '" "������ ���� ��� ����� ���� �� ���� ��������',
         ' �� ������ ������� ��� ����� �����" "������� �',
         '�� ���� ���� ��� ���� ��� ��� � ',
         '���� ��� ����',
         '����� ����',
         '������ ������� ������',
         '����� �� �����',
         '������',
         '���� ������ �������',
         '�����',
         '����� ������',
         '����� ��� ����� ������ ����',
         '�� ���',
         '����',
         '����� � ���� ������ ��� ',
         '����� ���� ������ ����� ���� ������',
         '������ ���� ������',
         '����� ���',
         '�� ��� ��� ����',
         '���� ���� �� ��� ��� �� ���� ����� ��� �� ����� ������'
    , '����� ���� �� ����� ����� ���� ������� ������ ������ ����',
         '? ��� �? ��� ��� �����'
    , '�� ������� ��� ������ �����']

  setInterval(() => {
client10.guilds.get(serverid).channels.get(roomid).send(`${Kahrbaa[Math.floor(Math.random() *Kahrbaa.length)]}`);
},60000);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"1") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"2") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"3") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"4") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"5") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

client6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"6") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"7") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client8.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"8") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client9.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"9") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});


client10.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(initcmd)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(initcmd.length);

  let args = message.content.split(" ").slice(1);


  
if (command == GroupNM +"10") {
let rank = message.guild.member(message.author).roles.find('name', 'Role.Kahrbaa');
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});







client.login(settings.token);
client2.login(settings.token2);
client3.login(settings.token3);
client4.login(settings.token4);
client5.login(settings.token5);
client6.login(settings.token6);
client7.login(settings.token7);
client8.login(settings.token8);
client9.login(settings.token9);
client10.login(settings.token10);
