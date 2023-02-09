function paperRequirements(firstBookQ, secondBookQ, ThirdBookQ) {
    //fbp first book page
    const fbp=100;
    const sbp=200;
    const tbp=300;
    // pffb page for first book
    let pffb= fbp * firstBookQ;
    let pfsb= sbp * secondBookQ;
    let pftb= tbp * ThirdBookQ;

    let totalPage= pffb + pfsb + pftb;

    return totalPage;
    
}

console.log(paperRequirements(1,1,1));