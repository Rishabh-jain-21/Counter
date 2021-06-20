let qty = document.querySelector('#disp');
let dec = document.querySelector('#b1');
let inc = document.querySelector('#b2');

dec.addEventListener('click',()=>{
    qty.value = parseInt(qty.value)-1;
    qty.innerHTML = qty.value;  
});

inc.addEventListener('click',()=>{
qty.value = parseInt(qty.value)+1;
qty.innerHTML = qty.value;  
});