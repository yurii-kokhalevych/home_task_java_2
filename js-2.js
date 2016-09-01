var fibNum = Number(prompt('Enter number fibonacci:'));
function fibonacci(n) {
    var t = [];
    var i;
    t[1] = 1;
    t[2] = 1;
    for (i = 3; i < n + 1; i++) {
        t[i] = t[i - 1] + t[i - 2];
    }
    document.write(t[n]);
    document.write('<br>');
    for (i = 1; i < (n + 1); i++) {
        document.write(t[i] + ",");
    }
    
}
    fibonacci(fibNum);
