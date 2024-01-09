const buttons = document.querySelectorAll('button');
const paragraps = document.querySelectorAll('.hidden');
console.log(buttons);
for (let i = 0;i < buttons.length; i++){
    buttons[i].addEventListener('click',()=>{
        paragraps[i].classList.toggle("show");
        buttons[i].classList.toggle("btn-minus");
    });
};