// const name = document.querySelector(".name");
// const inner = document.querySelector(".inner");
// function wordFocus(){
//     const textValue = document.querySelector(".name").value
//     inner.innerText=textValue
// }


// Task 1

// const input1 = document.querySelector('#input1');
// const input2 = document.querySelector('#input2')
// const input3 = document.querySelector('#input3');

// const input = document.querySelectorAll('input');
// const p = document.querySelectorAll('p')

// const submit = document.querySelector('.submit');
// const cancel = document.querySelector('.cancel');

// const p1 = document.querySelector('.p1');
// const p2 = document.querySelector('.p2');
// const p3 = document.querySelector('.p3');

// function key1(){
//     const textValue = document.querySelector("#input1").value;
//     p1.innerText=`Your name: ${textValue}`;
// }
// function key2(){
//     const textValue = document.querySelector("#input2").value;
//     p2.innerText=`Your age: ${textValue}`;
// }
// function key3(){
//     const textValue = document.querySelector("#input3").value;
//     p3.innerText=`Is married: ${textValue}`;
// }

// submit.addEventListener('click', () => {
//     const div = document.querySelector('.div');
//     div.innerHTML=`<p>✅You passed succesfully</p>`
// });
// cancel.addEventListener('click', () => {
//     input1.value=''
//     input2.value=''
//     input3.value=''
// });


// Task 2
// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');
// const btn3 = document.querySelector('.btn3');

// const box = document.querySelector('.box');

// btn1.addEventListener('click', () => {
//     box.style.opacity='1';
// });
// btn2.addEventListener('click', () => {
//     box.style.opacity='1';
// });
// btn3.addEventListener('click', () => {
//     box.style.opacity='1';
// });

// const cross = document.querySelector('.cross');
// cross.addEventListener('click', () => {
//     box.style.opacity='0';
// })


// Task 3 
const todo = document.querySelector('.todo');
const li = document.querySelector('li');
const submit = document.querySelector('.submit');
let start = 0;
submit.addEventListener('click', () => {
    start+=1
    todo.innerHTML+=`<li>item ${start}</li>`
})
