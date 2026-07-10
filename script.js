/* Iqtibos uslubi — matnlar ancha to'q va telefonda ko'rinadigan qilindi */
.quote {
    position: absolute;
    color: rgba(255, 255, 255, 0.25); /* To'qlik darajasi 0.12 dan 0.25 ga oshirildi! */
    font-size: 16px;
    font-style: italic;
    white-space: nowrap;
    animation: floatUp 20s infinite linear;
    bottom: -100px; /* Matnlar pastdan ko'tariladi */
}

/* Har bir iqtibosga har xil joylashuv (chapdan masofa) va tezlik beramiz */
.q1 { left: 5%; animation-delay: 0s; font-size: 18px; color: rgba(214, 175, 55, 0.3); } /* Oltinrang ham to'q qilindi */
.q2 { left: 15%; animation-delay: 3s; }
.q3 { left: 30%; animation-delay: 6s; }
.q4 { left: 50%; animation-delay: 9s; color: rgba(214, 175, 55, 0.25); }
.q5 { left: 65%; animation-duration: 22s; animation-delay: 12s; }
.q6 { left: 10%; animation-duration: 18s; animation-delay: 15s; }
.q7 { left: 40%; animation-duration: 25s; animation-delay: 2s; }

/* Animatsiyani o'zgartiramiz: Butun ekran bo'ylab pastdan tepaga chiqadi */
@keyframes floatUp {
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    10% {
        opacity: 1; /* Tezda ko'rinadigan bo'ladi */
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-120vh); /* Ekrandan butunlay tepaga chiqib ketadi */
        opacity: 0;
    }
}

/* === TELEFONLAR UCHUN EFFEKTNI YANADA CHIROYLILASHTIRISH === */
@media (max-width: 480px) {
    .container {
        padding: 25px 15px;
        width: 88%;
        background: rgba(15, 15, 15, 0.75); /* Karta foni biroz to'q qilinib, matnlar chetda yaqqol ko'rinadigan bo'ldi */
    }

    .quote {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.35); /* Telefon ekranida yanada to'qroq ko'rinishi uchun */
    }
    
    /* Telefon ekranida iqtiboslar bir-biriga yopishib ketmasligi uchun ularni tarqatamiz */
    .q1 { left: 2%; animation-duration: 16s; }
    .q2 { left: 8%; animation-duration: 20s; }
    .q3 { left: 4%; animation-duration: 24s; }
    .q4 { left: 6%; animation-duration: 18s; }
    .q5 { left: 3%; animation-duration: 22s; }
}
