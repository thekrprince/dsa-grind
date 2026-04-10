
function fun(n) {
    if (n === 0) return;
    console.log(n);
    // n = n - 1;
    // fun(n)
    fun(n - 1);
}

fun(10);