//window.alert(`welcome to [make monquavious rich simulator], 
//your goal is to make as much money as possible for donquavious`)


let money = 0;

let flint_basecost = 15;
let flint_cost = 15;
let flint_level = 1;
let flint_income = 1;

let wooden_basecost = 35;
let wooden_cost = 35;
let wooden_level = 1;
let wooden_income = 0;

let stone_basecost = 65;
let stone_cost = 65;
let stone_level = 1;
let stone_income = 0;

let limestone_basecost = 100;
let limestone_cost = 100;
let limestone_level = 1;
let limestone_income = 0;

document.getElementById("flintpickaxebutton").innerHTML = "flint pickaxe [level: " + flint_level + ", cost: " + flint_cost +", income: " + flint_income + "]";
document.getElementById("woodenpickaxebutton").innerHTML = "wooden pickaxe [level: " + wooden_level + ", cost: " + wooden_cost +", income: " + wooden_income + "]";
document.getElementById("stonepickaxebutton").innerHTML = "stone pickaxe [level: " + stone_level + ", cost: " + stone_cost +", income: " + stone_income + "]";
document.getElementById("limestonepickaxebutton").innerHTML = "limestone pickaxe [level: " + limestone_level + ", cost: " + limestone_cost +", income: " + limestone_income + "]";

function flintpickaxe_buy() {
    if (flint_cost <= money) {
        money -= flint_cost;
        flint_cost += (flint_basecost * 5);
        flint_income += 1;
        flint_level += 1;
    }
    document.getElementById("mainbutton").innerHTML = "$" + money;
    document.getElementById("flintpickaxebutton").innerHTML = "flint pickaxe [level: " + flint_level + ", cost: " + flint_cost +", income: " + flint_income + "]";
}

function woodenpickaxe_buy() {
    if (wooden_cost <= money) {
        money -= wooden_cost;
        wooden_cost += (wooden_basecost * 10);
        wooden_income += 2;
        wooden_level += 1;
    }
    document.getElementById("mainbutton").innerHTML = "$" + money;
    document.getElementById("woodenpickaxebutton").innerHTML = "wooden pickaxe [level: " + wooden_level + ", cost: " + wooden_cost +", income: " + wooden_income + "]";
}

function stonepickaxe_buy() {
    if (stone_cost <= money) {
        money -= stone_cost;
        stone_cost += (stone_basecost * 15);
        stone_income += 3;
        stone_level += 1;
    }
    document.getElementById("mainbutton").innerHTML = "$" + money;
    document.getElementById("stonepickaxebutton").innerHTML = "stone pickaxe [level: " + stone_level + ", cost: " + stone_cost +", income: " + stone_income + "]";
}

function limestonepickaxe_buy() {
    if (limestone_cost <= money) {
        money -= limestone_cost;
        limestone_cost += (limestone_basecost * 15);
        limestone_income += 3;
        limestone_level += 1;
    }
    document.getElementById("mainbutton").innerHTML = "$" + money;
    document.getElementById("limestonepickaxebutton").innerHTML = "limestone pickaxe [level: " + limestone_level + ", cost: " + limestone_cost +", income: " + limestone_income + "]";
}

function mainclick() {
    money += (flint_income + wooden_income + stone_income + limestone_income);
    document.getElementById("mainbutton").innerHTML = "$" + money;
}