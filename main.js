let popupBg1 = document.querySelector('.FAQpopup_bg1');
let popupBg2 = document.querySelector('.FAQpopup_bg2');
let popupBg3 = document.querySelector('.FAQpopup_bg3');
let popup1 = document.querySelector('.FAQ1popup'); // Само окно
let popup2 = document.querySelector('.FAQ2popup');
let popup3 = document.querySelector('.FAQ3popup');
let openPopupButton1 = document.querySelectorAll('.FAQfigure1Plus'); // Кнопки для показа окна
let openPopupButton2 = document.querySelectorAll('.FAQfigure2Plus');
let openPopupButton3 = document.querySelectorAll('.FAQfigure3Plus');
let closePopupButton1 = document.querySelector('.closePopup1');
let closePopupButton2 = document.querySelector('.closePopup2');
let closePopupButton3 = document.querySelector('.closePopup3'); // Кнопка для скрытия окна

openPopupButton1.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg1.classList.add('active'); // Добавляем класс 'active' для фона
        popup1.classList.add('active'); // И для самого окна
    })
});

closePopupButton1.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg1.classList.remove('active'); // Убираем активный класс с фона
    popup1.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg1) { // Если цель клика - фот, то:
        popupBg1.classList.remove('active'); // Убираем активный класс с фона
        popup1.classList.remove('active'); // И с окна
    }
});

openPopupButton2.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg2.classList.add('active'); // Добавляем класс 'active' для фона
        popup2.classList.add('active'); // И для самого окна
    })
});

closePopupButton2.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg2.classList.remove('active'); // Убираем активный класс с фона
    popup2.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg2) { // Если цель клика - фот, то:
        popupBg2.classList.remove('active'); // Убираем активный класс с фона
        popup2.classList.remove('active'); // И с окна
    }
});

openPopupButton3.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg3.classList.add('active'); // Добавляем класс 'active' для фона
        popup3.classList.add('active'); // И для самого окна
    })
});

closePopupButton3.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg3.classList.remove('active'); // Убираем активный класс с фона
    popup3.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg3) { // Если цель клика - фот, то:
        popupBg3.classList.remove('active'); // Убираем активный класс с фона
        popup3.classList.remove('active'); // И с окна
    }
});

let formaBg = document.querySelector('.FormaPopUp_bg');
let forma = document.querySelector('.FormaPopUp'); // Само окно
let openFormaButton = document.querySelectorAll('.MainForm1ButtonBkg'); // Кнопки для показа окна
let closeFormaButton = document.querySelector('.closeForm');

openFormaButton.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        formaBg.classList.add('active'); // Добавляем класс 'active' для фона
        forma.classList.add('active'); // И для самого окна
    })
});

closeFormaButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    formaBg.classList.remove('active'); // Убираем активный класс с фона
    forma.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === formaBg) { // Если цель клика - фот, то:
        formaBg.classList.remove('active'); // Убираем активный класс с фона
        forma.classList.remove('active'); // И с окна
    }
});