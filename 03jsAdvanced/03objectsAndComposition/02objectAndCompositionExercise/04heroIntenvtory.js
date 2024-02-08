function heroInventory(arr) {
    let obj = {};
    let objArray = [];

    arr.forEach(line => {
        let [name, level, items] = line.split(" / ");
        items = items ? items.split(", ") : [];

        obj["name"] = name;
        obj["level"] = Number(level);
        obj["items"] = items;
        objArray.push(obj);
        obj = {};
    });

    console.log(JSON.stringify(objArray));
}
heroInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])