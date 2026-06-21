let g_x = 14;


// Nested scope | blocked scope 
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);
        console.log(g_x);
        console.log(y);
    }
    inner();
  //  console.log(y);
}

outer();