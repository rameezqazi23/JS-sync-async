console.log("Before Preparing food")

function prepareFood(callback){
    setTimeout(() => {
        console.log("Prepare food");
        callback("Food is Ready");
    }, 2000)
}
function mycallback(value){
    console.log("Now the "+ value)

}

prepareFood(mycallback);

console.log("After preparing food dinner is ready");