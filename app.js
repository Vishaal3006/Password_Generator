const lowerCase="abcdefghijklmnopqrstuvwxyz";
const highCase=lowerCase.toUpperCase();
const numbers="0123456789";
const Symbol="!@#$%^&*()_-+={}[]|\/?><,.*\"';:";

const length=document.getElementById("length");
const IsLowerCase=document.getElementById("lowercase");
const IsUpperCase=document.getElementById("uppercase");
const IsSymbol=document.getElementById("specialchars");
const IsNumber=document.getElementById("numbers");
const Btn=document.getElementById("generate_password");
const Password=document.getElementById("password");

Btn.addEventListener("click",function() {
    const lengthEl=length.value;
    let chars="";
    let passwordRl="";
    if(IsLowerCase.checked){
        chars+=lowerCase;
    }
    if(IsUpperCase.checked){
        chars+=highCase;
    }
    if(IsSymbol.checked){
        chars+=Symbol;
    }
    if(IsNumber.checked){
        chars+=numbers;
    }
    for (let index = 0; index < lengthEl; index++) {
        passwordRl+=chars.charAt(Math.floor(Math.random()*chars.length));
        
    }
    Password.value=passwordRl;
});