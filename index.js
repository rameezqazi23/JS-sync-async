//This file is defines the promises 

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

let promise = prepareFood();
// console.log("Promise ",promise)
promise.then(function (foodValue) {
    console.log("Food is ready callback = ", foodValue);
    return prepareFrenchToast();
})
.then(function (frenchTaostValue) {
    console.log("French toast is ready callback = ", frenchTaostValue);
    return prepareCoffee();
    
})
.then(function(coffeeValue) {
    console.log("Coffee is ready callback = ",coffeeValue);

})
.catch(function(error){
    console.log("Error = ", error);
})





console.log("After preparing food dinner is ready");


