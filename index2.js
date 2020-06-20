//with promises we uses async & await

console.log("Before prepare food")



function prepareFood(){

    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("Prepare food");
            resolve("Food is Ready");
        }, 500);

    });
    return promise;
}

function prepareFrenchToast(){

    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("Prepare french toast");
            resolve("French toast is ready");
        }, 1000);

    });
    return promise;
}

function prepareCoffee(){

    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("Prepare coffee");
            resolve("Coffee is ready");
        }, 1500);

    });
    return promise;
}

//async is always be used with function declaration & await is always be used with function calling
async function startProcess() {

    let foodValue = await prepareFood();
    console.log(foodValue);
    let frenchTaostValue = await prepareFrenchToast();
    console.log(frenchTaostValue);
    let coffeeValue = await prepareCoffee();
    console.log(coffeeValue);
}

startProcess();

console.log("After preparing food dinner is ready");


