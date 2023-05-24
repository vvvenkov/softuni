function heroes(input) {
    let obj = {};
    let arr = [];

    for (let el of input) {
        let [hero, level, items] = el.split(" / ")
        obj = {
            hero: hero,
            level: level,
            items: items.split(", ")
        }
        arr.push(obj)
    }
    arr.sort((heroesA, heroesB) => heroesA.level - heroesB.level)

    for (let el of arr){
        console.log(`Hero: ${el.hero}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items.join(", ")}`);
    }
}
heroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])