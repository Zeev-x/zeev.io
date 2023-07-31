const axios = require("axios");

const uAiWaifu = "https://zeevalya.cyclic.app/home/api/ai-waifu";
const uAyaka = "https://zeevalya.cyclic.app/home/api/ayaka";
const uBocchi = "https://zeevalya.cyclic.app/home/api/bocchi";
const uBunny = "https://zeevalya.cyclic.app/home/api/bunny";
const uGenshin = "https://zeevalya.cyclic.app/home/api/genshin";
const uNahida = "https://zeevalya.cyclic.app/home/api/nahida";
const uOsakana = "https://zeevalya.cyclic.app/home/api/osakana";

const mess = {
  error : {
    status : false,
    name : "Error code 404",
    genre : "forbidden",
    url : "Error mungkin ada sesuatu yang salah",
    source : "https://zeevalya.cyclic.app"
  }
};

function aiWaifu(){
  return new Promise((resolve,reject) => {
    axios.get(uAiWaifu).then((response) => {
      resolve(response.data);
    });
  }).catch(err => resolve(mess.error));
}

function ayaka(){
  return new Promise((resolve,reject) => {
    axios.get(uAyaka).then((response) => {
      resolve(response.data);
    });
  }).catch(err => resolve(mess.error));
}

function bocchi(){
  return new Promise((resolve,reject) => {
    axios.get(uBocchi).then((response) => {
      resolve(response.data);
    });
  }).catch(err => resolve(mess.error));
}

function bunny(){
  return new Promise((resolve,reject) => {
    axios.get(uBunny).then((response) => {
      resolve(response.data);
    });
  }).catch(err => resolve(mess.error));
}

function genshin(){
  return new Promise((resolve,reject) => {
    axios.get(uGenshin).then((response) => {
      resolve(response.data);
    });
  }).catch(err => resolve(mess.error));
}

function nahida(){
  return new Promise((resolve,reject) => {
    axios.get(uNahida).then((response) => {
      resolve(response.data);
    });
  }).catch(err => resolve(mess.error));
}

function osakana(){
  return new Promise((resolve,reject) => {
    axios.get(uOsakana).then((response) => {
      resolve(response.data);
    });
  }).catch(err => resolve(mess.error));
}

module.exports.waifu = aiWaifu;
module.exports.ayaka = ayaka;
module.exports.bocchi = bocchi;
module.exports.bunny = bunny;
module.exports.genshin = genshin;
module.exports.nahida = nahida;
module.exports.osakana = osakana;