 let sum = 0;

 for(let i = 6; i >= 1; i--){
     sum = sum + i;
 }

 console.log(sum);


//  recurtion

 function added(i){
     console.log(i);
     if(i == 1){
         return 1;
     }
     return i + added(--i);
 }

 console.log(added(6));