let input= document.querySelector('.input')
let btn= document.querySelector('.btn')
let li= document.querySelector('.li')
let headding= document.querySelector('.headding')
li.style.listStyle= 'none'






btn.addEventListener('click',function(){
    if(Boolean(input.value-10)){
        li.innerHTML='';
        headding.innerHTML='';
       for(i=1; i<=10;i++){
        li.innerHTML +=`${input.value} x ${i} = ${input.value * i} <br/>`
       }

    }else{
        headding.innerHTML='Plase input a Number value '
    }
})