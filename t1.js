// var x= 8.0348978;
// x = parseFloat(x);
// x= x.toFixed(4);
// console.log(typeof(x), x);

// var smartphone = {
//      brand: "iPhone", model: "13" 
//     };

// console.log(smartphone.brand);

// var x= [1,2,3,4,5,6,7,8,9,10];

// function avg(arr){
//     var sum=0;
//     for(var c=0; c<arr.length; c++){
//         sum= arr[c]+ sum;
        
//     }
//     var avg=sum/arr.length;
//     return avg;

// }
// console.log(avg(x)); 

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0)
//        return false;
//     }
//     return true;
//   }

// console.log(isPrime(6));

//var x= [1,2,3,4,5,6,7,8,9,10];

//function avg(arr){
//    var sum=0;
    
//    for(var c=0; c<arr.length; c++){
//        if(arr[c]%2!=0){
        //     console.log(arr[c]);
        //     sum= arr[c]+ sum;

        // }
        // sum= arr[c]+ sum;
        
//    }
    // var avg=sum/arr.length;
//    return sum/;

// }
// console.log(avg(x)); 

function average (arrOfMarks){
  
    //write your code here
     let sum=0;
     for( let c =0; c<=arrOfMarks.length; c++){
       sum = sum + arrOfMarks[c];
       
       
     }
     console.log(sum);
     
     
     let avg= sum/arrOfMarks.length;
     return sum;
     
    
   }
   let x = [1,2,3,45,6,7,8,7];
   
   let output = average(x);
   console.log(output);