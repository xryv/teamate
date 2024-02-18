const toxic = document.querySelector('#toxic');
const communicatif = document.querySelector('#communicatif');
const bienveillant = document.querySelector('#bienveillant');
const expert = document.querySelector('#expert');
const btn_toxic = document.querySelector('#btn_toxic');
const btn_communicatif = document.querySelector('#btn_communicatif');
const btn_bienveillant = document.querySelector('#btn_bienveillant');
const xpSeuils = [50, 100, 125, 190, 230];
let niveauActuel = 0;
let xp = 0; 

function changeXP() {
    if (niveauActuel < 5) {
        let xpNecessairePourNiveau = xpSeuils[niveauActuel];
        let pourcentage = (xp / xpNecessairePourNiveau) * 100;
        pourcentage = pourcentage > 100 ? 100 : pourcentage;
        expert.style.height = `${pourcentage}%`;
        if (xp >= xpNecessairePourNiveau) {
            xp -= xpNecessairePourNiveau;
            niveauActuel++;
        }
    } else {
        expert.style.height = "100%";
    }
}

function changeToxic() {
    const currentHeight = parseFloat(getComputedStyle(toxic).height);
    const parentHeight = parseFloat(getComputedStyle(toxic.parentNode).height);
    const currentPercentage = (currentHeight / parentHeight) * 100;
    if (currentPercentage < 100) {
        toxic.style.height = `${currentPercentage + 2}%`;
        xp -= 1;
        changeXP(); 
    }
}

function changeCommunicatif() {
    const currentHeight = parseFloat(getComputedStyle(communicatif).height);
    const parentHeight = parseFloat(getComputedStyle(communicatif.parentNode).height);
    let currentPercentage = (currentHeight / parentHeight) * 100;
    
    if (currentPercentage >= 100) {
        communicatif.style.height = `0%`;
    } else {
        communicatif.style.height = `${currentPercentage + 2}%`;
        xp += 1;
    }
    changeXP();
}

function changebienveillant() {
    const currentHeightCool = parseFloat(getComputedStyle(bienveillant).height);
    const parentHeightCool = parseFloat(getComputedStyle(bienveillant.parentNode).height);
    let currentPercentageCool = (currentHeightCool / parentHeightCool) * 100;
    
    if (currentPercentageCool >= 100) {
        bienveillant.style.height = `0%`;
    } else {
        bienveillant.style.height = `${currentPercentageCool + 2}%`;
        xp += 2;
    }
    changeXP();
}



btn_toxic.addEventListener('click', changeToxic);
btn_communicatif.addEventListener('click', changeCommunicatif);
btn_bienveillant.addEventListener('click', changebienveillant);
