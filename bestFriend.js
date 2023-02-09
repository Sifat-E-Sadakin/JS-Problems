let friends= ["durlove","siam","tanab","rakib","upal","abir","alif","sifat-e-sadakin"];
console.log(bestFriends(friends));
function bestFriends(arr) {
    let longName="";
   for(let c =0; c<arr.length; c++){
    if (longName.length<arr[c].length){
        longName = arr[c];
    }
   }
   return longName;
    
}