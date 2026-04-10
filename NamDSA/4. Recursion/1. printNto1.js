
function fun(n) {
    if (n === 0) return;
    console.log(n);
    // let num = n - 1;
    // fun(num)
    fun(n - 1);
}

fun(10);