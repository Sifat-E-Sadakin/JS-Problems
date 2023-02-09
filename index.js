var x= 100;
var y=100;
var z= [1,2,3,4,5,6,7,8,9,10];
var n=0;

if(x<y){
    console.log("y is greater")
}
else{
    console.log("x is greater")
}
console.log(z.length);
console.log(z.indexOf(8))

while(n<10){
    if(z[n]%2==0){
        console.log("the number is even " + z[n]);
        n++;
    }
    else{
        console.log("the number id odd " + z[n]);
        n++;
    }
}