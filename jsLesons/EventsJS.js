const btn = document.querySelector('button'); // SOME BUTTON

btn.addEventListener('mouseenter',(event) => {  // 'event' the current event that happend
    console.log(event.currentTarget); // target - element that clicked
}); // adding EVENT to button | it doesnt metter if it BUTTON or just DIV, we can add event to any element

btn.removeEventListener('click', (e) =>{
    console.log("event removed");
});


// bubble event - срабатывание на вложеном элементе а после на родительском элементе
// События поднимаются вверх по иерархии. Стоит использовать  !!!  currentTarget  !!!


// ОТМЕНА СТАНДАРТНОГО ПОВЕКДЕНИЯ БРАУЗЕРА

const link = document.querySelector('a');

link.addEventListener('click', (event) =>{
        event.preventDefault(); // отменяет стандартное поведение, переход по ссылки

        console.log("Clicked");  // новое поведение
});