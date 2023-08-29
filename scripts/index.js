let increment_ammount = 1;
let money = 0;

let upgrade1_price = 25;
let upgrade2_price = 250;

document.getElementById("upgrade1button").innerHTML = "level 1 pickaxe upgrades < [cost: " + upgrade1_price + "] [+money p/c: " + increment_ammount + "]";
document.getElementById("upgrade2button").innerHTML = "level 2 pickaxe upgrades < [cost: " + upgrade2_price + "] [+money p/c: " + increment_ammount + "]";

function upgradeone() {
    console.log("upgrade 1 func ran");
    if (money >= upgrade1_price) {
        money -= upgrade1_price;
        increment_ammount += 2.25;
        upgrade1_price *= 1.5;
        document.getElementById("upgrade1button").innerHTML = "upgrade one < [cost: " + upgrade1_price + "] [+money p/c: " + increment_ammount + "]";
        document.getElementById("mainbutton").innerHTML = "$" + money;
    }
}

function upgradetwo() {
    console.log("upgrade 2 func ran");
    if (money >= upgrade2_price) {
        money -= upgrade2_price;
        increment_ammount += 15.5;
        upgrade2_price *= 3;
        document.getElementById("upgrade2button").innerHTML = "upgrade two < [cost: " + upgrade2_price + "] [+money p/c: " + increment_ammount + "]";
        document.getElementById("mainbutton").innerHTML = "$" + money;
    }
}

function buttonclick() {
    console.log("buttonclick func ran")
    money += increment_ammount;
    document.getElementById("mainbutton").innerHTML = "$" + money;
}