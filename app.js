/* SAT */

function trenutnoVrijeme() {

    let upravoSad= new Date();

    let satovi = document.querySelectorAll('.vrijeme');

    for (let i = 0; i < satovi.length; i++) {
        let sati = upravoSad.getHours();
        let minute = upravoSad.getMinutes();
   
    if (sati < 10) {
        sati = "0" + sati;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }
    satovi[i].textContent = sati + ':' + minute;
    }

}
setInterval(trenutnoVrijeme, 1000);

/* SAT */


/* POJAVLJIVANJE NOVE PORUKE */

const tipkovnica = document.getElementById('tipkovnica');
const sendButton = document.getElementById('send_button');
const aktivniChat = document.querySelector(".aktivni_chat");

sendButton.addEventListener("click", function() {
    const textNovePoruke = tipkovnica.value;
    const novaPoruka = document.createElement("div");
    
    novaPoruka.innerHTML = textNovePoruke;
    novaPoruka.classList.add("novi_element");

    aktivniChat.appendChild(novaPoruka);

    tipkovnica.value = "";
})


