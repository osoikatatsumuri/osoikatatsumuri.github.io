let burgerMenu = document.querySelector(".nav__burger");
let navMenu = document.querySelector(".nav__menu");
let body = document.querySelector("body");

burgerMenu.addEventListener("click", function() {
    burgerMenu.classList.toggle("_active");
    navMenu.classList.toggle("_active");
    body.classList.toggle("_lock");
}, false);

openPopup();

function openPopup() {
    let openButton = document.querySelector(".get-current-time");
    let popup = document.querySelector(".popup");
    let popupText = document.querySelector(".popup__text");

    openButton.addEventListener("click", () => {
        body.classList.toggle("_lock");
        popup.classList.toggle("_open");

        popupText.textContent = printWhatAPartOfDay();

    }, false);
}

function closePopup(name) {
    body.classList.remove("_lock");
    popup.classList.remove("_open");
}

function printWhatAPartOfDay() {
    let currentDate = new Date();

    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    let partOfDay

    console.log(currentHour >= 23 && currentHour);

    if (currentHour >= 4 && currentHour < 12)  {
        partOfDay = "Утро";
    }
        
    else if (currentHour >= 12 && currentHour < 16) {
        partOfDay = "День";
    }
        
    else if (currentHour >= 16 && currentHour < 23) {
        partOfDay = "Вечер";
    }  
    else if (currentHour >= 23 && currentHour < 24 || (currentHour >= 0 && currentHour < 4)) {
        partOfDay = "Ночь";  
    }
            
    console.log(partOfDay);
    
    return "Прямо сейчас " + currentHour + ":" + currentMinute + ". Это " + partOfDay;
}
