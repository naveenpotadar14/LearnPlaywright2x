function outer() {
    let message = "hello to inner function";
    console.log("Outer CALLED!");
    return inner;
    function inner() {
        console.log(message);
    }
   
}


let fn_inner = outer();
fn_inner();

// inner(); // ReferenceError: inner is not defined