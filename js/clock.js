let yourName = prompt("Adınız Nedir?")
let myName = document.querySelector("#myName")
myName.innerHTML = `
${yourName[0].toUpperCase() + yourName.slice(1).toLowerCase()}`

let myClock = document.querySelector("#myClock")

function tarihSaat() {
    let tarih = new Date();
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    let yil = tarih.getFullYear();
    let ay = tarih.getMonth();
    let gun = tarih.getDay();
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();
    myClock.innerHTML = `${gun}.${ay}.${yil}  -  ${gunler[tarih.getDay()]}  -  ${saat}:${dakika}:${saniye}`
}

setInterval(tarihSaat, 1000)

