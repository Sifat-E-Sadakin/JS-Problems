let x= [1,2,3,4,5,6,7,8,9,10,-1,3,4,5,];
console.log(config(x));

function config(arr) {
    let newArr=[];
    for( let c=0; c<arr.length; c++){
        if(arr[c]<0){
            break;
        }
        newArr.push(arr[c]);
    }
    return newArr;
    
}