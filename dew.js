let sum = 0; 
 let count = 0; 
 let number;


 while (true) {
     number = parseFloat(prompt('Enter a number : '));

     if (number < 0) {
         break; 
     }

     sum += number; 
     count++; 

 if (count > 0) {
     let average = sum / count; 
     console.log('Average is:', average);
 } else {
     console.log('No positive numbers entered.'); 
}
 }