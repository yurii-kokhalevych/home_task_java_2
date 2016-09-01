var fibNum = Number(prompt('Enter number fibonacci:'));
function fibonacci(n) {
    var t = [];
    var i;
    t[0] = 1;
    t[1] = 1;
    for (i = 2; i < n + 1; i++) {
        t[i] = t[i - 1] + t[i - 2];
    }
    document.write(t[n]);
    document.write('<br>');
    for (i = 0; i < (n + 1); i++) {
        document.write(t[i] + ",");
    }
    
}
    fibonacci(fibNum);
