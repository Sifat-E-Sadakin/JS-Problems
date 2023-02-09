function average (arrOfMarks){
    //write your code here
   // don't forget to write return
      var sum=0;
       for(var c=0; c<arrOfMarks.length; c++){
           sum= arrOfMarks[c]+ sum;
           
       }
       var avg=sum/arrOfMarks.length;
       return avg;
   }
   let x= [75.25, 65, 80, 35.45, 99.50];
   console.log(average(x));