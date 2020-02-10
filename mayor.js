var num1=Math.floor(Math.random()*20)
var num2=Math.floor(Math.random()*20)
var num3=Math.floor(Math.random()*20)
console.log(num1);
console.log(num2);
console.log(num3);
if (num1>num2)
    if(num1>num3)
     console.log(num1,"es le mayor");
    else
     console.log(num3,"es el mayor");
else 
    if(num2>num3)
     console.log(num2,"es le mayor");
    else
     console.log(num3,"es el mayor");
