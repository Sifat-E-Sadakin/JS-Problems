let x =[1,2,322,4,50,600,7,8,9,10];

function LG(arr){
    let temp=0;
    let lg=0;
    let slg=0;
    for(let c=0; c<arr.length ; c++){

        if (arr[c]>lg){
            lg=arr[c];
        }
        
    }
    for(let c=0; c<arr.length ; c++){

        if (arr[c]<lg  && arr[c]>slg){
            slg=arr[c];
        }
        
    }
    return slg;
}

console.log(LG(x));