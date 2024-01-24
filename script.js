const bar =document.getElementById('bar');
const nav =document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
const barclose =document.getElementById('close');
if(barclose){
    barclose.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}
// #72765c;