let generateBtn=document.getElementById("Generate")
let copyBtn=document.getElementById("copy")
let input = document.getElementById("input");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = ";.,/!@#$%^&*()_+-[]{}<>="
let all = uppercase + lowercase + numbers + symbols;
let length = 10;
let password="";
generateBtn.addEventListener("click",()=>{
   password+=uppercase[Math.floor(Math.random(uppercase)*uppercase.length)]
   password+=lowercase[Math.floor(Math.random(lowercase)*lowercase.length)]
   password+=numbers[Math.floor(Math.random(numbers)*numbers.length)]
   password+=symbols[Math.floor(Math.random(symbols)*symbols.length)]
   while(length > password.length){
    password+=all[Math.floor(Math.random(all)*all.length)]
   }
   input.value=password;
   password=""
})
copyBtn.addEventListener("click",()=>{
    input.select();
    input.setSelectionRange(0,100)
    navigator.clipboard.writeText(input.value);
    alert("Text copied Succesfuly")
    input.value=""
})


