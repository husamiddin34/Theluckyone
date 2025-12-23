// Baraban va matn elementlarini olish
const spinner = document.getElementById("spinner");
const text = document.getElementById("spinner-text");
const resultMessage = document.getElementById("result-message");

// Tugma va tugmaga hodisa qo'shish
const spinButton = document.querySelector(".spin-button");

// Yutuqlar ro'yxati
const options = ["5 Ming", "4 Ming", "3 Ming", "10 Ming Qarz", "Quloqchin", "Malibu", "Kitob", "200 Ming Pul", "Hech Narsa Yo'q"];
let isSpinning = false;  // Barabanni faqat bitta marta aylantirishni cheklash

// Tugmani bosganda barabanni aylantirish
spinButton.addEventListener("click", function () {
    if (!isSpinning) {  // Agar baraban hali aylantirilmagan bo'lsa
        isSpinning = true;
        const result = options[Math.floor(Math.random() * options.length)];

        // Barabanni aylantirish uchun animatsiya
        spinner.style.transition = "transform 5s ease-out";
        spinner.style.transform = "rotate(3600deg)"; // Barabaning aylanishi

        // Natija matnini o'zgartirish (5 soniya o'tgach)
        setTimeout(() => {
            text.innerText = ""; // "Aylanmoqda" matnini olib tashlash
            resultMessage.innerText = result === "Hech Narsa Yo'q" 
                ? "Omadni yana sinang!" 
                : `Tabriklaymiz! Siz ${result} yutdingiz!`;
        }, 5000);

        // Baraban to'xtaganidan keyin qayta aylantirish imkoniyatini berish
        setTimeout(() => {
            isSpinning = false;  // Barabanni qayta aylantirishga ruxsat berish
            spinner.style.transition = "none";  // Barabanni to‘xtatish
            spinner.style.transform = "rotate(0deg)"; // Barabanni boshlang‘ich holatga qaytarish
        }, 6000);  // Barabanni to'xtatish va qayta aylantirishni mumkin qilish
    }
});
