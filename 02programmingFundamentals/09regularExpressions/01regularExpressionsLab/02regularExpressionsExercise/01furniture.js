function furniture(data) {
    let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/g;
    let totalPrice = 0;

    let match = pattern.exec(data)

    for (let line of data){
        if (line === "Purchase"){
            break;
        }
        
        let furniture = match.groups[furniture];
        let price = match.groups[price] 
    }

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])