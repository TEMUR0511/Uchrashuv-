const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainCard = document.getElementById('main-card');
const detailsCard = document.getElementById('details-card');
const finalMessage = document.getElementById('final-message');

// Elementlar bosqichlari
const stageTitle = document.getElementById('stage-title');
const stageSubtitle = document.getElementById('stage-subtitle');
const locationOptions = document.getElementById('location-options');
const dayOptions = document.getElementById('day-options');
const timeOptions = document.getElementById('time-options');

// Tanlangan ma'lumotlarni saqlash uchun obyekt
let uchrashuvData = {
    lokatsiya: '',
    kun: '',
    vaqt: ''
};

// "Yo'q" tugmasining qochishi
function qochibKet() {
    const padding = 150; 
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    if (randomX < padding) randomX = padding;
    if (randomY < padding) randomY = padding;

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}
noBtn.addEventListener('mouseenter', qochibKet);
noBtn.addEventListener('click', qochibKet);

// "Ha" tugmasi bosilganda
yesBtn.addEventListener('click', () => {
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    mainCard.classList.add('hidden');
    detailsCard.classList.remove('hidden');
});

// 1-Bosqich: Lokatsiya tanlanganda
function selectLocation(loc) {
    uchrashuvData.lokatsiya = loc;
    
    // Lokatsiyalarni yashirib, kunlarni ko'rsatamiz
    locationOptions.classList.add('hidden');
    stageTitle.innerHTML = "Ajoyib lokatsiya! 👌";
    stageSubtitle.innerHTML = "Endi esa qaysi kuni uchrashishimiz qulay? Tanlang:";
    dayOptions.classList.remove('hidden');

    confetti({ particleCount: 40, spread: 40, origin: { y: 0.7 } });
}

// 2-Bosqich: Kun tanlanganda
function selectDay(day) {
    uchrashuvData.kun = day;

    // Kunlarni yashirib, vaqtni ko'rsatamiz
    dayOptions.classList.add('hidden');
    stageTitle.innerHTML = "Ajoyib kun! 🗓️";
    stageSubtitle.innerHTML = "Soat nechchida uchrashamiz? Tanlang:";
    timeOptions.classList.remove('hidden');

    confetti({ particleCount: 40, spread: 40, origin: { y: 0.7 } });
}

// 3-Bosqich: Vaqt tanlanganda (Yakuniy qism)
function selectTime(time) {
    uchrashuvData.vaqt = time;

    // Vaqtlarni ham yashiramiz va sarlavhalarni chiroyli qilamiz
    timeOptions.classList.add('hidden');
    stageTitle.innerHTML = "Hammasi tayyor! 🎉";
    stageSubtitle.innerHTML = "Uchrashuv detallari tasdiqlandi:";

    // Yakuniy xulosani ekranga chiqaramiz
    finalMessage.innerHTML = `
        📍 Joy: <strong>${uchrashuvData.lokatsiya}</strong><br>
        📅 Kun: <strong>${uchrashuvData.kun} kuni</strong><br>
        🕒 Vaqt: <strong>Soat ${uchrashuvData.vaqt} da</strong><br><br>
        Tez orada ko'rishguncha! 😉
    `;

    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}