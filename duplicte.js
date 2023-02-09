let x= ["messi", "neymar", "suarz", "rakitic", "xavi", "pedri","xavi", "messi","neymar", "sifat", "sifat","sadakin","sadakin"];
console.log(x);

let y=[];

for(let c =0; c<=x.length-1 ;c++){
    
    if(y.includes(x[c]) == false ){
        y.push(x[c]);
    }
}
console.log(y);
