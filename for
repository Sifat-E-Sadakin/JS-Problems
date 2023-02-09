var x= [1,2,3,4,5,6,7,8,9,10];

function avg(arr){
    var sum=0;
    for(var c=0; c<arr.length; c++){
        sum= arr[c]+ sum;
        
    }
    var avg=sum/arr.length;
    return avg;

}
console.log(avg(x)); 